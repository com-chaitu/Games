import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../common/common.module';
import { SignonComponent } from './signon/signon.component';
import { PreloginComponent } from './prelogin.component';
import { PreloginRouting } from './prelogin-routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, PreloginRouting, CommonComponentsModule, NgbModule.forRoot()
  ],
  declarations: [SignonComponent, PreloginComponent]
})
export class PreloginModule { }
