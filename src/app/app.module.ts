import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendService } from './services/backend.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonComponentsModule } from './commom/common.module';
import { GamesHeaderComponent } from './games-header/games-header.component';
import { GamesFooterComponent } from './games-footer/games-footer.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    GamesHeaderComponent,
    GamesFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonComponentsModule,
    NgbModule.forRoot()
  ],
  providers: [BackendService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
