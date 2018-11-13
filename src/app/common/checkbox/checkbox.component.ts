import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input('text')
  text: string;

  @Input('checkboxId')
  checkboxId: string;

  @Input('checked')
  checked: boolean = false;

  @Input('disabled')
  disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
