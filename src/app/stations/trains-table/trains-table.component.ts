import { Component, OnInit, Input } from '@angular/core';
import { Departure } from '../departure';

@Component({
  selector: 'app-trains-table',
  templateUrl: './trains-table.component.html',
  styleUrls: ['./trains-table.component.css']
})
export class TrainsTableComponent implements OnInit {
  
  @Input()
  departures: Departure[];

  @Input()
  selectStation: string;

  constructor() { }

  ngOnInit(): void {
  }

}
