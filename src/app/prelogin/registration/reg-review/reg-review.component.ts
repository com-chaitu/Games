import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { RegistrationModel } from '../model/registration.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reg-review',
  templateUrl: './reg-review.component.html',
  styleUrls: ['./reg-review.component.css']
})
export class RegReviewComponent implements OnInit {
  registrationData: RegistrationModel;

  constructor(
    private _regService: RegistrationService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.registrationData = this._regService.registrationData;
  }

  onSubmit() {
    this._router.navigate(['../reg-pwd-setup'], { relativeTo: this._route });
  }

}
