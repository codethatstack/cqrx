import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

import { ContactsComponent, ContactEditComponent, ContactFormComponent, MainNavComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { DataApiModule } from '@codethatstack/data/api';

const ROUTES: Route[] = [
  {
    path: '',
    component: MainNavComponent,
    children: [
        { 
        path: '', 
        component: ContactsComponent,
      },
      {
        path: 'contact/:id',
        component: ContactEditComponent
      }
    ]
  },
];


@NgModule({
  declarations: [AppComponent, MainNavComponent, ContactsComponent, ContactEditComponent, ContactFormComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    DataApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
