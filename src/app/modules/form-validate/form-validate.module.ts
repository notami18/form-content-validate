import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormValidateComponent } from './form-validate.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FormValidateComponent],
  exports: [FormValidateComponent]
})
export class FormValidateModule { }
