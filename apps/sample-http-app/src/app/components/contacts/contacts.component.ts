import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { ContactsQuery } from '@codethatstack/data/api';

@Component({
  selector: 'cqrx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {

  constructor(public contactsQuery: ContactsQuery) { 
    console.log('Injected', contactsQuery.name);
  }

  ngOnInit() {
    this.contactsQuery.pending
    .pipe(untilDestroyed(this))
    .subscribe(p => {
      console.log('Contacts Pending', p);
    });
    
    this.contactsQuery.values
    .pipe(untilDestroyed(this))
    .subscribe(p => {
      console.log('Contacts', p);
    });

    this.contactsQuery.execute({ status: 'active'});
  }

  ngOnDestroy(): void { }
}
