import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromContact from './actions';
import { ContactService } from '../contact.service';

@Injectable()
export class ContactEffects {
  @Effect()
  list$ = this.actions$
    .ofType(fromContact.LOAD_CONTACT_LIST)
    .pipe(
      switchMap(() =>
        this.contactService
          .getContacts()
          .pipe(
            map(data => new fromContact.LoadContactsSuccessAction(data)),
            catchError(err => of(new fromContact.LoadContactsFailureAction(err)))
          )
      )
    );

  @Effect()
  detail$ = this.actions$.ofType(fromContact.LOAD_CONTACT_DETAIL).pipe(
    map((action: fromContact.LoadContactDetailAction) => action.id),
    switchMap(id =>
      this.contactService
        .getContact(id)
        .pipe(
          map(data => new fromContact.LoadContactDetailSuccessAction(data)),
          catchError(err => of(new fromContact.LoadContactDetailFailureAction(err)))
        )
    )
  );

  @Effect()
  save$ = this.actions$.ofType(fromContact.SAVE_CONTACT_DETAIL).pipe(
    map((action: fromContact.SaveContactDetailAction) => action.payload),
    switchMap(model =>
      this.contactService
        .saveContact(model)
        .pipe(
          map(data => new fromContact.SaveContactDetailSuccessAction(data)),
          catchError(err => of(new fromContact.SaveContactDetailFailureAction(err)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private contactService: ContactService
  ) {}
}
