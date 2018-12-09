import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../app.state';
import * as fromContacts from './reducer';

export * from './actions';

export interface State extends fromRoot.State {
  contacts: fromContacts.State;
}

const getContactsFeatureState = createFeatureSelector<fromContacts.State>(
  'contacts'
);

export const getContactList = createSelector(
  getContactsFeatureState,
  state => state.contacts
);

export const getSelectedContactId = createSelector(
  getContactsFeatureState,
  state => state.selectedContactId
);

export const getSelectedContact = createSelector(
  getContactsFeatureState,
  state => state.selectedContact
);

export const getLoading = createSelector(
  getContactsFeatureState,
  state => state.loading
);

export const getPending = createSelector(
  getContactsFeatureState,
  state => state.pending
);

export const getError = createSelector(
  getContactsFeatureState,
  state => state.error
);

export const getSaveResponse  = createSelector(
  getContactsFeatureState,
  state => state.saveResponse
);