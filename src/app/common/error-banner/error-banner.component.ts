import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {

  @ViewChild('ngContent')
  ngContentRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
