import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Query } from '@cqrx/core';

import { ContactModel } from '@codethatstack/data/models';
import * as fromContacts from '../contact';


@Injectable({
  providedIn: 'root'
})
export class ContactQuery implements Query<ContactCriteria, ContactModel> {

  public name = 'Contact Query - NGRX Powered';

  public values = this.store.pipe(select(fromContacts.getSelectedContact));
  public pending = this.store.pipe(select(fromContacts.getLoading));

  constructor(private store: Store<fromContacts.State>) { }

  public execute(criteria: ContactCriteria): void {
    this.store.dispatch(new fromContacts.LoadContactDetailAction(criteria.id));
  }

}

export interface ContactCriteria {
  id: string;
}
