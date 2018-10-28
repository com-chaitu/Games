import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoadImage } from './img-load/img-load.component';
import { JampComponent } from './jamp/jamp.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


const imports = [
  LoadImage,
  JampComponent,
  ProgressBarComponent
];

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [...imports],
  exports: [...imports]
})
export class CommonComponentsModule { }
