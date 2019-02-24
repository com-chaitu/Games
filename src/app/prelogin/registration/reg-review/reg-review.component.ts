import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { RegistrationModel } from '../model/registration.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-reg-review',
  templateUrl: './reg-review.component.html',
  styleUrls: ['./reg-review.component.css']
})
export class RegReviewComponent implements OnInit, AfterViewInit {
  registrationData: RegistrationModel;
  displayError = false;

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
    window.scrollTo(0, 0);
    this.registrationData = this._regService.registrationData;

    if (!this.registrationData || !this.registrationData.emailId) {
      this._router.navigate(['../reg-form'], { relativeTo: this._route });
    }
  }

  onSubmit() {
    this.displayError = false;
    this._cs.displayJampScreen(true);
    this._bs.makePost('/isUserEnrolled', this.registrationData).subscribe(data => {
      if (data.userRegistered) {
        this._router.navigate(['../reg-form'], { relativeTo: this._route, queryParams: { 'user': 'alreadyRegistered' } });
      } else {
        this._router.navigate(['../reg-pwd-setup'], { relativeTo: this._route });
      }
    }, error => {
      this.displayError = true;
      this._cs.displayJampScreen(false);
    });
  }

  navigateBack() {
    this._cs.displayJampScreen(true);
  }

}
