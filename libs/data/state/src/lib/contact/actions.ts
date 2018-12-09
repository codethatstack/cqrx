import { Action } from '@ngrx/store';
import { ContactModel } from '@codethatstack/data/models';

export const LOAD_CONTACT_LIST = '[Contact] Load Contact List';
export const LOAD_CONTACT_LIST_SUCCESS = '[Contact] Load Contact List success';
export const LOAD_CONTACT_LIST_FAILURE = '[Contact] Load Contact List failure';

export const LOAD_CONTACT_DETAIL = '[Contact] Load detail';
export const LOAD_CONTACT_DETAIL_SUCCESS = '[Contact] Load detail success';
export const LOAD_CONTACT_DETAIL_FAILURE = '[Contact] Load detail failure';

export const SAVE_CONTACT_DETAIL = '[Contact] Save Contact detail';
export const SAVE_CONTACT_DETAIL_SUCCESS = '[Contact] Save Contact detail success';
export const SAVE_CONTACT_DETAIL_FAILURE = '[Contact] Save Contact detail failure';

export class LoadContactsAction implements Action {
  readonly type = LOAD_CONTACT_LIST;
  constructor(public payload: any) {}
}

export class LoadContactsSuccessAction implements Action {
  readonly type = LOAD_CONTACT_LIST_SUCCESS;
  constructor(public payload: ContactModel[]) {}
}

export class LoadContactsFailureAction implements Action {
  readonly type = LOAD_CONTACT_LIST_FAILURE;
  constructor(public payload: any) {}
}

export class LoadContactDetailAction implements Action {
  readonly type = LOAD_CONTACT_DETAIL;
  constructor(public id: string) {}
}

export class LoadContactDetailSuccessAction implements Action {
  readonly type = LOAD_CONTACT_DETAIL_SUCCESS;
  constructor(public payload: ContactModel) {}
}

export class LoadContactDetailFailureAction implements Action {
  readonly type = LOAD_CONTACT_DETAIL_FAILURE;
  constructor(public payload: any) {}
}

export class SaveContactDetailAction implements Action {
  readonly type = SAVE_CONTACT_DETAIL;
  constructor(public payload: ContactModel) {}
}

export class SaveContactDetailSuccessAction implements Action {
  readonly type = SAVE_CONTACT_DETAIL_SUCCESS;
  constructor(public payload: any) {}
}

export class SaveContactDetailFailureAction implements Action {
  readonly type = SAVE_CONTACT_DETAIL_FAILURE;
  constructor(public payload: any) {}
}


export type ContactActionsUnion =
  | LoadContactsAction
  | LoadContactsSuccessAction
  | LoadContactsFailureAction
  | LoadContactDetailAction
  | LoadContactDetailSuccessAction
  | LoadContactDetailFailureAction
  | SaveContactDetailAction
  | SaveContactDetailSuccessAction
  | SaveContactDetailFailureAction
