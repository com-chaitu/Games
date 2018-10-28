import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-prelogin',
  templateUrl: './prelogin.component.html',
  styleUrls: ['./prelogin.component.css']
})
export class PreloginComponent implements OnInit, AfterViewInit {

  carouselImages: Array<string>;

  constructor(private _cs: CommonService) { }

  ngAfterViewInit() {
    this._cs.displayJampScreen(false);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.carouselImages = ['/assets/login_1.png', '/assets/login_2.png', '/assets/login_3.png'];

    //adding base href
    this.carouselImages.forEach(url => {
      if (url.startsWith('/')) {
        url = this._cs.baseHref + url;
      }
    })
  }

  goToRegistration() {
    this._cs.displayJampScreen(true);
  }

}
