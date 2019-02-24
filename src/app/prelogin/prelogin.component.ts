import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-prelogin',
  templateUrl: './prelogin.component.html',
  styleUrls: ['./prelogin.component.css']
})
export class PreloginComponent implements OnInit, AfterViewInit {

  carouselImages: Array<string>;
  emailId: string;
  password: string;
  hasEmailError: boolean = false;
  hasPasswordError: boolean = false;
  emailErrorMsg: string;
  passwordErrorMsg: string;
  validationRules: any;

  @HostListener('window:keyup', ['$event']) onkeyup(event) {
    const targetId = event.target.id;
    const validationRule = this.validationRules[targetId];
    const regex = validationRule ? new RegExp(validationRule.allowedRegex) : new RegExp(this.validationRules['default'].allowedRegex);
    while (!regex.test(event.target.value)) {
      event.target.value = event.target.value.slice(0, event.target.value.length - 1);
    }

    if (targetId === 'emailId') {
      this.emailId = event.target.value;
    } else if (targetId === 'password') {
      this.password = event.target.value
    }

    
  }

  constructor(private _cs: CommonService) { }

  ngAfterViewInit() {
    this._cs.displayJampScreen(false);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.carouselImages = ['/assets/login_1.png', '/assets/login_2.png', '/assets/login_3.png'];
    this.validationRules = this._cs.validationRules;
    //adding base href
    this.carouselImages.forEach((url, index, carouselImages) => {
      if (url.startsWith('/')) {
        url = this._cs.baseHref + url;
        carouselImages[index] = url;
      }
    })
  }

  submit() {
    this.isValidRequest();
  }

  isValidRequest(): boolean {
    const emailValidationRule = this.validationRules['emailId'];
    const emailRegex = emailValidationRule ? new RegExp(emailValidationRule.regex) : new RegExp(this.validationRules['default'].regex);
    
    if (!this.emailId) {
      this.hasEmailError = true;
      this.emailErrorMsg = "Enter your registered Email Id.";
      return false;
    }
    
    if (!emailRegex.test(this.emailId)) {
      this.hasEmailError = true;
      this.emailErrorMsg = "Enter a valid Email Id.";
      return false;
    }

    if (!this.password) {
      this.hasPasswordError = true;
      this.passwordErrorMsg = "Enter your password.";
      return false;
    }

    if (this.password.length < 6) {
      this.hasPasswordError = true;
      this.passwordErrorMsg = "Your password must be atleast 6 characters long.";
    }


    return true;
  }

  goToRegistration() {
    this._cs.displayJampScreen(true);
  }

}
