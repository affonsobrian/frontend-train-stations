import { Component, OnInit } from '@angular/core';

import { Station } from '../station';
import { StationsService } from '../../stations.service';
import { Departure } from '../departure';

@Component({
  selector: 'app-select-stations',
  templateUrl: './select-stations.component.html',
  styleUrls: ['./select-stations.component.css']
})
export class SelectStationsComponent implements OnInit {

  selectStation: string = "";
  stations: Station[];
  stationsLoaded: boolean = false;
  departures: Departure[] = [];

  dataChanged(value: string){
      this.selectStation = value;
      this.service.getDepartures(value)
        .subscribe( response => {
          this.departures = response;
        })
  }

  constructor(private service : StationsService) { }

  ngOnInit(): void {
    this.service.getStations()
      .subscribe( response => {
        this.stations = response;
        this.stationsLoaded = true;
      })
    }
}
