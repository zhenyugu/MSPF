import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from './registrationModel';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.model = new RegistrationModel('', '', '', '', '');
  }

  get diagnostic() { return JSON.stringify(this.model); }

  register() {
    this.registrationService.create(this.model).then(data => {
    });
  }

}
