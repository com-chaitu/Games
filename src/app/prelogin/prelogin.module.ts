import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SignonComponent } from './signon/signon.component';
import { PreloginComponent } from './prelogin.component';
import { PreloginRouting } from './prelogin-routing.module';

@NgModule({
  imports: [
    CommonModule, PreloginRouting, NgbModule.forRoot()
  ],
  declarations: [SignonComponent, PreloginComponent]
})
export class PreloginModule { }
