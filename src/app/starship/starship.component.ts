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

  starships: any[];
  title: string;
  rota: string;

  constructor(private starshipService: StarshipService) {
    this.title = 'Starship';
    this.rota = 'starships';
  }

    ngOnInit() {
      this.starshipService.getStarships()
        .subscribe((starships: Starship[]) => this.starships = starships);
    }

}
