import { NgModule } from '@angular/core';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('contacts', reducer),
    EffectsModule.forFeature([ContactEffects])
  ],
  declarations: []
})
export class ContactStateModule {}
