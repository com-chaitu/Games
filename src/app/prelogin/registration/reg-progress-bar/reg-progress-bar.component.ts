import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ViewChildren, HostListener } from '@angular/core';

@Component({
  selector: 'app-reg-progress-bar',
  templateUrl: './reg-progress-bar.component.html',
  styleUrls: ['./reg-progress-bar.component.css']
})
export class RegProgressBarComponent implements OnInit, AfterViewInit {
  screenList: Array<string>;
  currentScreenIndex: number;
  pipeStyles: any;
  @Input()
  screenId: string;

  @ViewChild('progressBar')
  progressBar: ElementRef;


  @HostListener('window:resize') onWindowResize() {
    this.setPipeStyles();
  }

  constructor() { }

  ngOnInit() {
    this.screenList = ['form', 'review', 'pwdSetup', 'confirmation'];
    this.currentScreenIndex = this.getCurrentScreenIndex();
    document.documentElement.style.setProperty('--reg-progress-bar-screens', ''+this.screenList.length);
    this.setPipeStyles();
  }

  ngAfterViewInit() {
    this.setPipeStyles();
  }

  getCurrentScreenIndex() {
    return this.screenList.indexOf(this.screenId);
  }

  setPipeStyles() {
    const barWidth = this.progressBar.nativeElement.offsetWidth;
    let pipeWidth = ((barWidth - this.screenList.length * 25)/(this.screenList.length -1)) + 2*21/2;
    this.pipeStyles = {'width.px': pipeWidth, 'margin-left.px': -11, 'margin-right.px': -12};
  }

}
