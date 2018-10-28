import { Component, ViewChild, OnInit } from '@angular/core';
import { JampComponent } from './common/jamp/jamp.component';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('jamp')
  jamp: JampComponent;

  title = 'games';

  constructor(private _commonService: CommonService) {

  }

  ngOnInit() {
    this.jamp.displayJamp(true);
    this._commonService.displayJamp.subscribe(emittedValue => {
      this.jamp.displayJamp(emittedValue);
    });
  }


}
