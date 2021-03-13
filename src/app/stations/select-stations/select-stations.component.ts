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

  dataChanged(value: string){
      this.selectStation = value;
      console.log(value);
      this.service.getDepartures(value)
        .subscribe( response => {
          console.log(response);
          this.departures = response;
        })
  }

  stations: Station[];
  stationsLoaded: boolean = false;
  departures: Departure[] = [];

  constructor(private service : StationsService) { }

  ngOnInit(): void {
    this.service.getStations()
      .subscribe( response => {
        console.log(response);
        this.stations = response;
        this.stationsLoaded = true;
      })
    }
}
