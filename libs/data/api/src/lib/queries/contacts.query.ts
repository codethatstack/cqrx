import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from "rxjs/operators";

import { ContactModel } from '@codethatstack/data/models';

import { BaseQuery } from '@cqrx/core';


@Injectable()
export class ContactsQuery extends BaseQuery<ContactsCriteria, ContactModel[]> {

  readonly endpoint = 'https://jsonplaceholder.typicode.com/users';
  public name = "ContactsQuery - Http Powered";
  
  constructor(private httpClient: HttpClient) {
    super();
  }

  public onQuery(criteria: ContactsCriteria): Observable<ContactModel[]> {
    return this.httpClient.get<ContactsDataModel[]>(this.endpoint)
      .pipe(
          delay(1000),
          map(users => {
              return users.map(p => { return {
                  id: p.id,
                  name: p.name,
                  email: p.username
              }})
          })
      );
  }
}

export interface ContactsCriteria {
  status: string;
}

interface ContactsDataModel {
  id: string;
  name: string;
  username: string;
}