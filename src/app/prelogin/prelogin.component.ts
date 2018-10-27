import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-prelogin',
  templateUrl: './prelogin.component.html',
  styleUrls: ['./prelogin.component.css']
})
export class PreloginComponent implements OnInit, AfterViewInit {

  constructor(private _cs: CommonService) { }

  ngAfterViewInit() {
    this._cs.displayJampScreen(false);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goToRegistration() {
    this._cs.displayJampScreen(true);
  }

}
