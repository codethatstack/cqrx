import { ContactModel } from '@codethatstack/data/models';

import * as actions from './actions';

export interface State {
  selectedContactId: string;
  selectedContact: ContactModel;
  contacts: ContactModel[];
  loading: boolean;
  pending: boolean;
  error: any;
  saveResponse: any;
}

const initialState: State = {
  selectedContactId: null,
  selectedContact: null,
  contacts: null,
  loading: false,
  pending: false,
  error: null,
  saveResponse: null
};

export function reducer(
  state: State = initialState,
  action: actions.ContactActionsUnion): State {

  switch (action.type) {
    case actions.LOAD_CONTACT_LIST:
      return {
        ...state,
        loading: true,
        error: null,
        saveResponse: null
      };
    case actions.LOAD_CONTACT_LIST_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case actions.LOAD_CONTACT_LIST_FAILURE:
      return {
        ...state,
        contacts: [],
        loading: false,
        error: action.payload
      };      


    case actions.LOAD_CONTACT_DETAIL:
      return {
        ...state,
        selectedContactId: action.id,
        loading: true,
        error: null,
        saveResponse: null
      };
    case actions.LOAD_CONTACT_DETAIL_SUCCESS:
      return {
        ...state,
        selectedContact: action.payload,
        loading: false
      };
    case actions.LOAD_CONTACT_DETAIL_FAILURE:
      return {
        ...state,
        selectedContact: null,
        loading: false,
        error: action.payload,
      };


    case actions.SAVE_CONTACT_DETAIL:
      return {
        ...state,
        pending: true,
        error: null,
        saveResponse: null
      };
    case actions.SAVE_CONTACT_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        saveResponse: action.payload
      };
    case actions.SAVE_CONTACT_DETAIL_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload
      };

    default:
      return state;
  }
}
