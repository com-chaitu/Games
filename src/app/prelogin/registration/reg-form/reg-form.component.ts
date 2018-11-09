import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { RegistrationService } from '../services/registration.service';
import { RegistrationModel } from '../model/registration.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit, AfterViewInit {

  validationRules: any;
  registrationData: RegistrationModel;
  hasEmailError = false;
  hasMobileError = false;
  hasFirstNameError = false;
  mandatoryFieldError = false;
  displayError = false;

  @ViewChild('regForm')
  regForm: ElementRef;

  @HostListener('window:keyup', ['$event']) onkeyup(event) {
    const targetId = event.target.id;
    const validationRule = this.validationRules[targetId];
    const regex = validationRule ? new RegExp(validationRule.allowedRegex) : new RegExp(this.validationRules['default'].allowedRegex);
    const errorTarget: HTMLElement = this.regForm.nativeElement.querySelector('#' + targetId + 'Error');
    if (errorTarget) {
      while (!regex.test(event.target.value)) {
        event.target.value = event.target.value.slice(0, event.target.value.length - 1);
      }
      this.registrationData[targetId] = event.target.value;
    }
  }

  constructor(
    private _regService: RegistrationService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _cs: CommonService,
    private _backend: BackendService) { }

  ngAfterViewInit() {
    this._cs.displayJampScreen(false);
  }

  ngOnInit() {
    this._cs.displayJampScreen(true);
    window.scrollTo(0, 0);
    if (this._regService.registrationData) {
      this.registrationData = this._regService.registrationData;
    } else {
      this.registrationData = new RegistrationModel();
    }
    this.validationRules = this._regService.validationRules;
    this._route.queryParams.subscribe(params => {
      if (params['user'] && params['user'] === 'alreadyRegistered') {
        this.displayError = true;
      }
    });
  }

  onInputBlur(event) {
    const targetId = event.target.id;
    const validationRule = this.validationRules[targetId];
    const regex = validationRule ? new RegExp(validationRule.regex) : new RegExp(this.validationRules['default'].regex);
    const errorTarget: HTMLElement = this.regForm.nativeElement.querySelector('#' + targetId + 'Error');
    if (errorTarget) {
      if (!regex.test(event.target.value)) {
        if (event.target.value) {
          errorTarget.innerText = 'Please enter valid ' + event.target.placeholder + '.';
          if ('emailId' === targetId) {
            this.hasEmailError = true;
          } else if ('firstName' === targetId) {
            this.hasFirstNameError = true;
          } else if ('mobile' === targetId) {
            this.hasMobileError = true;
          }
        }
        // else if (validationRule.isMandatory) {
        //   errorTarget.innerText = 'Please enter ' + event.target.placeholder + '.';
        // }


      } else {
        errorTarget.innerText = '';
        if ('emailId' === targetId) {
          this.hasEmailError = false;
        } else if ('firstName' === targetId) {
          this.hasFirstNameError = false;
        } else if ('mobile' === targetId) {
          this.hasMobileError = false;
        }
      }
    }
    this.updateMandatoryFieldError();
  }

  onSubmit() {
    if ((this.registrationData.emailId && !this.hasEmailError) && (this.registrationData.firstName && !this.hasFirstNameError)
      && (this.registrationData.mobile && !this.hasMobileError)) {
      this._regService.registrationData = this.registrationData;
      this._cs.displayJampScreen(true);
      this._router.navigate(['../reg-review'], { relativeTo: this._route });
    } else {
      !this.registrationData.emailId && (this.hasEmailError = true);
      !this.registrationData.firstName && (this.hasFirstNameError = true);
      !this.registrationData.mobile && (this.hasMobileError = true);
      this.mandatoryFieldError = true;
      window.scrollTo(0, 0);
    }
  }

  updateMandatoryFieldError() {
    if (this.registrationData.emailId && this.registrationData.firstName && this.registrationData.mobile) {
      this.mandatoryFieldError = false
    }
  }

  navigateToLogin() {
    this._cs.displayJampScreen(true);
  }
}
