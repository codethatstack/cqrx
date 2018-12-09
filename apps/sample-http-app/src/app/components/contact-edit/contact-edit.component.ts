import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { SaveContactCommand } from 'libs/data/api/src/lib/commands';
import { ContactModel } from '@codethatstack/data/models';
import { ContactQuery } from 'libs/data/api/src/lib/queries/contact.query';

@Component({
  selector: 'cts-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public contactQuery: ContactQuery,
    public saveContactCommand: SaveContactCommand) { 
    console.log('Injected', contactQuery.name);
    console.log('Injected', saveContactCommand.name);
  }
    
  ngOnInit() {
    this.route.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        this.contactQuery.execute({
          id: params.id
        });
      });

    this.contactQuery.pending
      .pipe(untilDestroyed(this))
      .subscribe(p => {
        console.log('Contact Pending', p);
      });

    this.contactQuery.values
      .pipe(untilDestroyed(this))
      .subscribe(p => {
        console.log('Contact', p);
      });

    this.saveContactCommand.pending
      .pipe(untilDestroyed(this))
      .subscribe(p => {
        console.log('Contact save processing: ', p);
      });

    this.saveContactCommand.complete
      .pipe(untilDestroyed(this))
      .subscribe(p => {
        console.log('Contact save completed', p);
        this.location.back();
      });

    this.saveContactCommand.errors
      .pipe(untilDestroyed(this))
      .subscribe(p => {
        console.log('Contact save error: ', p);
      });

  }

  ngOnDestroy(): void { }
  
  save(model: ContactModel): void {
    this.saveContactCommand.execute(model);
  }

}
