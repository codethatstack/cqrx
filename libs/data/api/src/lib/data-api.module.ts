import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { ContactsQuery, ContactQuery } from './queries';
import { SaveContactCommand } from './commands';

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  providers: [
    ContactsQuery,
    ContactQuery,
    SaveContactCommand
  ]
})
export class DataApiModule {}
