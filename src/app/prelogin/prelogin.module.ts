import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { CommonComponentsModule } from '../common/common.module';
import { SignonComponent } from './signon/signon.component';
import { PreloginComponent } from './prelogin.component';
import { PreloginRouting } from './prelogin-routing.module';

@NgModule({
  imports: [
    CommonModule, PreloginRouting, CommonComponentsModule, NgbModule.forRoot()
  ],
  declarations: [SignonComponent, PreloginComponent]
})
export class PreloginModule { }
