import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { RegistrationModel } from '../model/registration.model';

@Component({
  selector: 'app-reg-pwd-setup',
  templateUrl: './reg-pwd-setup.component.html',
  styleUrls: ['./reg-pwd-setup.component.css']
})
export class RegPwdSetupComponent implements OnInit {
  registrationData: RegistrationModel;

  constructor(private _regService: RegistrationService) { }

  ngOnInit() {
    this.registrationData = this._regService.registrationData;
  }

}
