import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  private emailId: string;
  private firstName: string;
  private lastName: string;
  private dob: Date;
  private mobile: number;
  private address: string;

  constructor(private _backend: BackendService) { }

  ngOnInit() {
  }

  onSubmit() {
    let requestJson = {};
    Object.assign(requestJson, {'emailId': this.emailId});
    Object.assign(requestJson, {'firstName': this.firstName});
    Object.assign(requestJson, {'lastName': this.lastName});
    Object.assign(requestJson, {'dob': this.dob});
    Object.assign(requestJson, {'mobile': this.mobile});

    const url = 'http://localhost:8080/createCustomer';
    // this._backend.makePost(url, requestJson).subscribe(
    //   success => {
    //     console.log(success);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    const get = 'http://localhost:8080/testc';
    this._backend.makePost(get, requestJson).subscribe(
      success => {
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  }
}
