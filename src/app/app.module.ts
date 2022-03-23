import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ButtonComponent } from './components/button/button.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { SortByRankingPipe } from './pipes/sort-by-ranking.pipe';
import { SortByArgPipe } from './pipes/sort-by-arg.pipe';
import { SortByTypePipe } from './pipes/sort-by-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    CapitalizeFirstPipe,
    SortByRankingPipe,
    SortByArgPipe,
    SortByTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
