import { Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { RegistrationService } from '../services/registration.service';
import { RegistrationModel } from '../model/registration.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  vaidationRules = {
    "emailId": {
      "isMandatory": true,
      "regex": "^(.+)@(.+)\\.[a-zA-Z]{2,5}$",
      "allowedRegex": "^(.){0,}$"
    },
    "firstName": {
      "isMandatory": true,
      "regex": "^[a-zA-Z ]{1,}$",
      "allowedRegex": "^[a-zA-Z ]{0,40}$"
    },
    "lastName": {
      "isMandatory": false,
      "regex": "^[a-zA-Z ]{0,}$",
      "allowedRegex": "^[a-zA-Z ]{0,40}$"
    },
    "dob": {
      "isMandatory": false,
      "regex": null,
      "allowedRegex": "^(.){0,}$"
    },
    "mobile": {
      "isMandatory": true,
      "regex": "^[0-9]{10}$",
      "allowedRegex": "^[0-9]{0,10}$"
    },
    "city": {
      "isMandatory": false,
      "regex": "^[a-zA-Z ]{0,}$",
      "allowedRegex": "^[a-zA-Z ]{0,24}$"
    },
    "pincode": {
      "isMandatory": false,
      "regex": "^[0-9]{0,6}$",
      "allowedRegex": "^[0-9]{0,6}$"
    },
    "default": {
      "isMandatory": false,
      "regex": "^(.){0,}$",
      "allowedRegex": "^(.){0,}$"
    },
  };

  registrationData: RegistrationModel;
  hasEmailError = false;
  hasMobileError = false;
  hasFirstNameError = false;
  mandatoryFieldError = false;

  @ViewChild('regForm')
  regForm: ElementRef;

  @HostListener('window:keyup', ['$event']) onkeyup(event) {
    const targetId = event.target.id;
    const validationRule = this.vaidationRules[targetId];
    const regex = validationRule ? new RegExp(validationRule.allowedRegex) : new RegExp(this.vaidationRules['default'].allowedRegex);
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
    private _backend: BackendService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this._regService.registrationData) {
      this.registrationData = this._regService.registrationData;
    } else {
      this.registrationData = new RegistrationModel();
    }
  }

  onInputBlur(event) {
    const targetId = event.target.id;
    const validationRule = this.vaidationRules[targetId];
    const regex = validationRule ? new RegExp(validationRule.regex) : new RegExp(this.vaidationRules['default'].regex);
    const errorTarget: HTMLElement = this.regForm.nativeElement.querySelector('#' + targetId + 'Error');
    if (errorTarget) {
      if (!regex.test(event.target.value)) {
        if (event.target.value) {
          errorTarget.innerText = 'Please enter valid ' + event.target.placeholder + '.';
        } else if (validationRule.isMandatory) {
          errorTarget.innerText = 'Please enter ' + event.target.placeholder + '.';
        }

        if ('emailId' === targetId) {
          this.hasEmailError = true;
        } else if ('firstName' === targetId) {
          this.hasFirstNameError = true;
        } else if ('mobile' === targetId) {
          this.hasMobileError = true;
        }
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
    if (this.registrationData.emailId && this.registrationData.firstName && this.registrationData.mobile) {
      this._regService.registrationData = this.registrationData;
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
}
