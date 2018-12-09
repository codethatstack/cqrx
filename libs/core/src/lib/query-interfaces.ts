import { Observable } from 'rxjs';

export interface OnQueryValues<TModel> {
  values: Observable<TModel>;
}

export interface OnQueryExecute<TCriteria> {
  execute(criteria?: TCriteria): void;
}

export interface OnQueryPending {
  pending: Observable<boolean>;
}

export interface Query<TCriteria, TModel> extends 
    OnQueryValues<TModel>,
    OnQueryExecute<TCriteria>,
    OnQueryPending { }

export interface QuerySelector<TModel> extends
    OnQueryValues<TModel>, 
    OnQueryExecute<null>, 
    OnQueryPending { }