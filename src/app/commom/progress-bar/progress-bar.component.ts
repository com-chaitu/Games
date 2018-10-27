import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, ViewChildren, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {
  screenList: Array<string>;
  currentScreenIndex: number;
  pipeStyles: any;
  @Input()
  screenId: string;
  removePipe = true;
  removeCircle = true;

  @ViewChild('progressBar')
  progressBar: ElementRef;


  @HostListener('window:resize') onWindowResize() {
    this.setPipeStyles();
  }

  constructor() { }

  ngOnInit() {
    this.screenList = ['form', 'review', 'pwdSetup', 'confirm'];
    this.currentScreenIndex = this.getCurrentScreenIndex();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setPipeStyles();
      this.removePipe = false;
      setTimeout(() => {
        this.removeCircle = false;
      }, 900);
    }, 0);
  }

  getCurrentScreenIndex() {
    return this.screenList.indexOf(this.screenId);
  }

  setPipeStyles() {
    const barWidth = this.progressBar.nativeElement.offsetWidth;
    let pipeWidth = ((barWidth - this.screenList.length * 25) / (this.screenList.length - 1)) + 2 * 22 / 2;
    this.pipeStyles = { 'width.px': pipeWidth, 'margin-left.px': -11, 'margin-right.px': -12 };
  }

}
