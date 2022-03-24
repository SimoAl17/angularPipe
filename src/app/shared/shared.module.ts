import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { SortByTypePipe } from './pipes/sort-by-type.pipe';



@NgModule({
  declarations: [
    CapitalizeFirstPipe,
    SortByTypePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizeFirstPipe,
    SortByTypePipe
  ]
})
export class SharedModule { }
