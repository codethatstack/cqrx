import { Observable } from 'rxjs';

export interface OnCommandExecute<TModel> {
  execute(model: TModel): void;
}

export interface OnCommandPending {
  pending: Observable<boolean>;
}

export interface OnCommandCompleted<TResponse> {
  complete: Observable<TResponse>;
}

export interface OnCommandError {
  errors: Observable<any>;
}

export interface Command<TModel, TResponse> extends
    OnCommandExecute<TModel>,
    OnCommandPending,
    OnCommandCompleted<TResponse>,
    OnCommandError { }
