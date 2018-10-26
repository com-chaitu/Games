import { Component, OnInit, HostListener } from '@angular/core';
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
  validationRules: any;
  displayPasswordMatchMsg = false;
  passwordMatch = false;
  disableSubmit = true;

  @HostListener('window:keyup', ['$event']) onkeyup(event) {
    const targetId = event.target.id;
    if (('password' === targetId || 'rePassword' === targetId) && event.keyCode !== 9 && event.keyCode !== 16) {

      const validationRule = this.validationRules['password'];
      const regex = validationRule ? new RegExp(validationRule.allowedRegex) : new RegExp(this.validationRules['default'].allowedRegex);
      while (!regex.test(event.target.value)) {
        event.target.value = event.target.value.slice(0, event.target.value.length - 1);
      }
      if (targetId === 'password') {
        this.password = event.target.value;
      } else {
        this.rePassword = event.target.value;
      }
      if (this.password === this.rePassword) {
        this.validatePasswords();
      } else {
        this.disableSubmit = true;
        this.displayPasswordMatchMsg = false;
      }
    }
  }

  constructor(
    private _regService: RegistrationService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.registrationData = this._regService.registrationData;
    if (this.registrationData) {
      this.userId = this.registrationData.emailId;
    } else {
      this._router.navigate(['../reg-form'], { relativeTo: this._route });
    }
    this.validationRules = this._regService.validationRules;
  }

  validatePasswords() {
    if (this.password && this.rePassword) {
      if (this.password === this.rePassword) {
        this.passwordMatch = true;
        this.disableSubmit = false;
      } else {
        this.passwordMatch = false;
        this.disableSubmit = true;
      }
      this.displayPasswordMatchMsg = true;
    }
  }

  onSubmit() {
    this._router.navigate(['../reg-confirm'], { relativeTo: this._route });
  }

}
