import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {

  name: any
  email: any
  constructor() { }

  ngOnInit() {
  }

  onKeyName(event: KeyboardEvent) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onKeyEmail(event: KeyboardEvent) {
    this.email = (event.target as HTMLInputElement).value;
  }
}
