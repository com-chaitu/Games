import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackendService } from './services/backend.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GamesHeaderComponent } from './games-header/games-header.component';
import { GamesFooterComponent } from './games-footer/games-footer.component';

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
    NgbModule.forRoot()
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
