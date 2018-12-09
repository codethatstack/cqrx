import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { BaseCommand } from '@cqrx/core';

import { ContactModel } from '@codethatstack/data/models';
import { delay } from 'rxjs/operators';

export interface SaveContactResponse {
  isSuccessful: boolean;
}

@Injectable()
export class SaveContactCommand extends BaseCommand<ContactModel, SaveContactResponse> implements OnDestroy {

    public name = 'Save Contact Command - Http';

    constructor(private httpClient: HttpClient) {
        super();
    }

    public onExecute(model: ContactModel): Observable<SaveContactResponse> {
      return of({ isSuccessful: true}).pipe(delay(1000));
    }

    public ngOnDestroy(): void {
        this.destroy();
    }
}