import { NgFormReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NgFormRoutingModule } from './ng-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFormTemplateFormComponent } from './template-form/template-form.component';
import { HeroFormComponent } from './template-form/hero-form/hero-form.component';
import { NgFormZorroReactiveFormsComponent } from './zorro-reactive-forms/reactive-forms.component';
import { NgFormValidationComponent } from './validation/validation.component';
import { TempValidationComponent } from './validation/temp-validation/temp-validation.component';
import { ReactiveValidationComponent } from './validation/reactive-validation/reactive-validation.component';

const COMPONENTS = [
  NgFormReactiveFormsComponent,
  NgFormTemplateFormComponent,
  NgFormZorroReactiveFormsComponent,
  NgFormValidationComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    NgFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    HeroFormComponent,
    TempValidationComponent,
    ReactiveValidationComponent
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class NgFormModule {}
