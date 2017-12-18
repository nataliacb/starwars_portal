import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Starship } from './../starship.model';
import { StarshipService } from './../starship.service';
import { forkJoin } from 'rxjs/observable/forkJoin';


@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship.detail.component.html',
  styleUrls: ['./starship.detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship: Starship = new Starship();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private starshipService: StarshipService) { }

  ngOnInit() {
    let id = this.route.params.subscribe(params => {
      let id = params['id'];

      let ship = this.starshipService.getStarship(id);
      let shipPilots = this.starshipService.getPilots(id);

      forkJoin([ship, shipPilots]).subscribe(res => {
        // res[0] is our starship
        // res[1] is our starship pilots
        res[0].pilots = res[1].name;
        this.starship = res[0];
      });

      console.log(this.starship);

    });
  }

}
