import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { RegistrationModel } from '../model/registration.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-reg-pwd-setup',
  templateUrl: './reg-pwd-setup.component.html',
  styleUrls: ['./reg-pwd-setup.component.css']
})
export class RegPwdSetupComponent implements OnInit, AfterViewInit {
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
    private _cs: CommonService,
    private _bs: BackendService,
    private _route: ActivatedRoute) { }

  ngAfterViewInit() {
    this._cs.displayJampScreen(false);
  }

  ngOnInit() {
    this._cs.displayJampScreen(true);
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
    this._cs.displayJampScreen(true);
    if (this.isValidRequest()) {
       
      this._bs.makePost('/registerUser', this.registrationData).subscribe(success => {
        this._router.navigate(['../reg-confirm'], { relativeTo: this._route });
      }, error => {
        console.log('error');

        // to do for error flow
      });
    } else {
      // to do for invalid request
    }
  }

  isValidRequest() {
    return true;
  }

  navigateBack() {
    this._cs.displayJampScreen(true);
  }

}
