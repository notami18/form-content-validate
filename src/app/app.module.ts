import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormValidateModule } from "./modules/form-validate/form-validate.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormValidateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
