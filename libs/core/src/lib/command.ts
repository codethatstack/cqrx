import { Observable, Subject, of, Unsubscribable } from 'rxjs';
import { tap, delay, mergeMap, catchError } from 'rxjs/operators';

import { Command } from './command-interfaces';

export abstract class BaseCommand<TModel, TResponse>
  implements Command<TModel, TResponse> {
  public pending: Observable<boolean>;
  public errors: Observable<any>;
  public complete: Observable<any>;

  private _request$ = new Subject<TModel>();
  private _pending$ = new Subject<boolean>();
  private _errors$ = new Subject();
  private _complete$ = new Subject<TResponse>();

  private requestSubscription: Unsubscribable;

  constructor() {
    this.pending = this._pending$.asObservable();
    this.errors = this._errors$.asObservable();
    this.complete = this._complete$.asObservable();

    this.requestSubscription = this._request$
      .pipe(
        delay(0),
        tap(() => this._pending$.next(true)),
        mergeMap(model =>
          this.onExecute(model).pipe(catchError(err => this.onError(err)))
        ),
        tap(x => {
          this._pending$.next(false);
        })
      )
      .subscribe(p => {
        // Need to subscribe so pipeline executes
        this.onCompleted(p);
      });
  }

  public execute(model: TModel): void {
    this._request$.next(model);
  }

  // Will need to come back and check on subscription later
  public destroy(): void {
    this.requestSubscription.unsubscribe();
  }

  protected onCompleted(value: TResponse) {
    this._complete$.next(value);
  }

  protected onError(err: any): Observable<any> {
    this._errors$.next(err);
    return of(null);
  }

  protected abstract onExecute(model: TModel): Observable<any>;
}
