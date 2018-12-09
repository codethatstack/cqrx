import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { ContactModel } from '@codethatstack/data/models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  readonly endpoint = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  public getContacts(): Observable<ContactModel[]> {
    return this.httpClient.get<ContactModel[]>(this.endpoint).pipe(
      delay(1000),
      map(users => {
        return users.map(p => {
          return {
            id: p.id,
            name: p.name,
            email: p.email
          };
        });
      })
    );
  }

  public getContact(id: string): Observable<ContactModel> {

    return this.httpClient.get<ContactsDataModel>(`${this.endpoint}/${id}`)
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

  public saveContact(model: ContactModel): Observable<any> {
    // Simulate saving to backend server
    return of({ isSuccessful: true})
    .pipe(
      delay(800)
    );
  }
}

interface ContactsDataModel {
  id: string;
  name: string;
  username: string;
}
