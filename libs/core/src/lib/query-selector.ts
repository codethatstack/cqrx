import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { switchMap, tap, delay, shareReplay } from 'rxjs/operators';

import { QuerySelector } from './query-interfaces';

export abstract class BaseQuerySelector<TModel> implements QuerySelector<TModel> {
  public pending: Observable<boolean>;
  public values: Observable<TModel>;

  private _requestChanged$ = new ReplaySubject(1);
  private _pending$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.pending = this._pending$.asObservable();
    this.values = this._requestChanged$.pipe(
      delay(0),
      tap(() => this._pending$.next(true)),
      switchMap(_ => {
        return this.onQuery();
      }),
      tap(() => this._pending$.next(false)),
      shareReplay(1)
    );
  }

  public execute(): void {
    this._requestChanged$.next(true);
  }

  public abstract onQuery(): Observable<TModel>;
}
