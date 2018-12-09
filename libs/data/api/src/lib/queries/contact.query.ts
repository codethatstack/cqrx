import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay } from "rxjs/operators";

import { ContactModel } from '@codethatstack/data/models';

import { BaseQuery } from '@cqrx/core';


@Injectable()
export class ContactQuery extends BaseQuery<ContactCriteria, ContactModel> {

  readonly endpoint = 'https://jsonplaceholder.typicode.com/users';
  public name = 'Contact Query - Http';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public onQuery(criteria: ContactCriteria): Observable<ContactModel> {
    return this.httpClient.get<ContactsDataModel>(`${this.endpoint}/${criteria.id}`)
      .pipe(
          delay(800),
          map(p => {
              return {
                  id: p.id,
                  name: p.name,
                  email: p.username
              }})
      );
  }
}

export interface ContactCriteria {
  id: string;
}

interface ContactsDataModel {
  id: string;
  name: string;
  username: string;
}