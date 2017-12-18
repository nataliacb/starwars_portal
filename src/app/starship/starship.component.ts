import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Starship } from './starship.model';
import { StarshipService } from './starship.service';



@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css'],
  providers: [ StarshipService ]
})
export class StarshipComponent implements OnInit {

  starships: Starship[] = [];

  constructor(private starshipService: StarshipService) {}

    ngOnInit() {
      this.starshipService.getStarships()
        .subscribe(data => this.starships = data);
    }

}
