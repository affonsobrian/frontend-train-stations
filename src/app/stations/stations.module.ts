import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationsRoutingModule } from './stations-routing.module';
import { SelectStationsComponent } from './select-stations/select-stations.component';
import { TrainsTableComponent } from './trains-table/trains-table.component';


@NgModule({
  declarations: [SelectStationsComponent, TrainsTableComponent],
  imports: [
    CommonModule,
    StationsRoutingModule,
  ],
  exports: [
    SelectStationsComponent
  ]
})
export class StationsModule { }
