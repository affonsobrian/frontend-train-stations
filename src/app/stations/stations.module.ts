import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { SelectStationsComponent } from './select-stations/select-stations.component';


@NgModule({
  declarations: [SelectStationsComponent],
  imports: [
    CommonModule,
    StationsRoutingModule,
  ],
  exports: [
    SelectStationsComponent
  ]
})
export class StationsModule { }
