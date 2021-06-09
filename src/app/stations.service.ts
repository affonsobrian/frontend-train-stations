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
    return this.http.get<Station[]>("https://train-departure.herokuapp.com/stations/");
  }

  getDepartures() : Observable<Departure[]> {
    return this.http.get<Departure[]>("http://praticando-api.herokuapp.com/livros");
  }
}
