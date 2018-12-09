import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ContactStateModule } from './contact/contacts.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      logOnly: false
    }),
    EffectsModule.forRoot([]),
    ContactStateModule
  ],
  providers: []
})
export class DataStateModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: DataStateModule
  ) {
    if (parentModule) {
      throw new Error(
        'AppStateModule is already loaded. Import only in AppModule.'
      );
    }
  }
}
