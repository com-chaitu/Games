import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reg-progress-bar',
  templateUrl: './reg-progress-bar.component.html',
  styleUrls: ['./reg-progress-bar.component.css']
})
export class RegProgressBarComponent implements OnInit {
  screenList: Array<string>;
  currentScreenIndex: number;
  @Input()
  screenId: string;

  constructor() { }

  ngOnInit() {
    this.screenList = ['form', 'review', 'confirmation'];
    this.currentScreenIndex = this.getCurrentScreenIndex();
    document.documentElement.style.setProperty('--reg-progress-bar-screens', ''+this.screenList.length);
  }

  getCurrentScreenIndex() {
    return this.screenList.indexOf(this.screenId);
  }

}
