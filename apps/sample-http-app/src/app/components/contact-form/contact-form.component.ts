import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactModel } from '@codethatstack/data/models';

@Component({
  selector: 'cts-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnChanges {
  
  @Input() contact: ContactModel;
  @Input() pending: boolean = false;
  @Output() changes = new EventEmitter<ContactModel>();
  
  form: FormGroup;
  
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  
  ngOnInit(): void { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.contact && changes.contact.previousValue !== changes.contact.currentValue) {
      this.form.reset();
      if (!!changes.contact.currentValue) {
        this.form.patchValue(changes.contact.currentValue);
      }
    }
  }

  save(model: ContactModel): void {
    this.changes.emit(model);
  }
}
