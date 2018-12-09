import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { switchMap, tap, delay, shareReplay } from 'rxjs/operators';

import { Query } from './query-interfaces';

export abstract class BaseQuery<TCriteria, TModel> implements Query<TCriteria, TModel> {
  public pending: Observable<boolean>;
  public values: Observable<TModel>;

  private _requestChanged$ = new ReplaySubject<TCriteria>(1);
  private _pending$ = new BehaviorSubject<boolean>(true);

  constructor() {
    this.pending = this._pending$.asObservable();
    this.values = this._requestChanged$.pipe(
      delay(0),
      tap(() => this._pending$.next(true)),
      switchMap(criteria => {
        return this.onQuery(criteria);
      }),
      tap(() => this._pending$.next(false)),
      shareReplay(1)
    );
  }

  public execute(request?: TCriteria): void {
    this._requestChanged$.next(request);
  }

  public abstract onQuery(criteria: TCriteria): Observable<TModel>;
}
