import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectStationsComponent } from './select-stations/select-stations.component';


const routes: Routes = [
  { path : 'departures', component : SelectStationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule { }
