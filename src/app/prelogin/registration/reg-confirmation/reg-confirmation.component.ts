import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-reg-confirmation',
  templateUrl: './reg-confirmation.component.html',
  styleUrls: ['./reg-confirmation.component.css']
})
export class RegConfirmationComponent implements OnInit, AfterViewInit {

  constructor(
    private _cs: CommonService
  ) { }

  ngAfterViewInit() {
    this._cs.displayJampScreen(false);
  }

  ngOnInit() {
    this._cs.displayJampScreen(true);
  }

  onSubmit() {
    
  }

  navigateToLogin() {
    this._cs.displayJampScreen(true);
  }

}
