import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { RegistrationModel } from '../model/registration.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-pwd-setup',
  templateUrl: './reg-pwd-setup.component.html',
  styleUrls: ['./reg-pwd-setup.component.css']
})
export class RegPwdSetupComponent implements OnInit {
  registrationData: RegistrationModel;
  userId: string;
  password: string;
  rePassword: string;

  constructor(
    private _regService: RegistrationService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.registrationData = this._regService.registrationData;
    if (this.registrationData) {
      this.userId = this.registrationData.emailId;
    } else {
      this._router.navigate(['../reg-form'], {relativeTo: this._route});
    }
  }

  onSubmit() {
    this._router.navigate(['../reg-confirm'], {relativeTo: this._route});
  }

}
