import { Injectable } from '@angular/core';
import { Station } from './stations/station';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departure } from './stations/departure';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private http: HttpClient) {}

  getStations() : Observable<Station[]>{
    return this.http.get<Station[]>("http://localhost:8000/stations");
  }

  getDepartures(stationCode: string) : Observable<Departure[]> {
    return this.http.get<Departure[]>("http://localhost:8000/departures/"+stationCode);
  }

}
