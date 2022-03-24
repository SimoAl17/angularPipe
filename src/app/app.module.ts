import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { SortByRankingPipe } from './shared/pipes/sort-by-ranking.pipe';
import { SortByArgPipe } from './shared/pipes/sort-by-arg.pipe';
import { BlackBackgroundDirective } from './directives/black-background.directive';
import { BackgroundDirective } from './directives/background.directive';
import { ListModule } from './components/list/module/list.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SortByRankingPipe,
    SortByArgPipe,
    BlackBackgroundDirective,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
