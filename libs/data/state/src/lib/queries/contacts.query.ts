import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Query } from '@cqrx/core';

import { ContactModel } from '@codethatstack/data/models';
import * as fromContacts from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsQuery implements Query<ContactsCriteria, ContactModel[]> {
  
  public name = 'Contacts Query - NGRX Powered';
  public values = this.store.pipe(select(fromContacts.getContactList));
  public pending = this.store.pipe(select(fromContacts.getLoading));

  constructor(private store: Store<fromContacts.State>) { }

  public execute(criteria: ContactsCriteria): void {
    this.store.dispatch(new fromContacts.LoadContactsAction(criteria));
  }
}

export interface ContactsCriteria {
  status: string;
}
