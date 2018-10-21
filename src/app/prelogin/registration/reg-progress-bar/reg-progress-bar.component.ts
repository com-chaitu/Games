import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-reg-progress-bar',
  templateUrl: './reg-progress-bar.component.html',
  styleUrls: ['./reg-progress-bar.component.css']
})
export class RegProgressBarComponent implements OnInit {
  screenList: Array<string>;
  currentScreenIndex: number;
  pipeStyles: any;
  @Input()
  screenId: string;

  @ViewChild('progressBar')
  progressBar: ElementRef;



  constructor() { }

  ngOnInit() {
    this.screenList = ['form', 'review', 'pwdSetup', 'confirmation'];
    this.currentScreenIndex = this.getCurrentScreenIndex();
    document.documentElement.style.setProperty('--reg-progress-bar-screens', ''+this.screenList.length);
    this.setPipeStyles();
  }

  getCurrentScreenIndex() {
    return this.screenList.indexOf(this.screenId);
  }

  setPipeStyles() {
    const barWidth = this.progressBar.nativeElement.offsetWidth;
    let pipeWidth = ((barWidth - this.screenList.length * 25)/(this.screenList.length -1)) + 2*23/2;
    this.pipeStyles = {'width.px': pipeWidth, 'margin-left.px': -11, 'margin-right.px': -12};
  }

}
