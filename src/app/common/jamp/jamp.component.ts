import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jamp',
  templateUrl: './jamp.component.html',
  styleUrls: ['./jamp.component.css']
})
export class JampComponent implements OnInit {

  public show = false;

  constructor() { }

  ngOnInit() {
  }

  displayJamp(display: boolean) {
    this.show = display;
  }

}
