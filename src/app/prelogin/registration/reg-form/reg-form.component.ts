import { Component, OnInit } from '@angular/core';
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
  registrationData: RegistrationModel;

  constructor(
    private _regService: RegistrationService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _backend: BackendService) { }

  ngOnInit() {
    this.registrationData= new RegistrationModel();
  }

  onSubmit() {
    this._regService.registrationData = this.registrationData;
    this._router.navigate(['../reg-review'], {relativeTo: this._route});
  }
}
