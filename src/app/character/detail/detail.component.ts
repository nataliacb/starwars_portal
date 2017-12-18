import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Character } from './../character.model';
import { CharacterService } from './../character.service';
import { forkJoin } from 'rxjs/observable/forkJoin';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CharacterService]
})
export class DetailComponent implements OnInit {

  character: Character = new Character();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private charactersService: CharacterService) { }

  ngOnInit() {
    let id = this.route.params.subscribe(params => {
      let id = params['id'];

      let char = this.charactersService.getCharacter(id);
      let charSpecie = this.charactersService.getSpecies(id);

      forkJoin([char, charSpecie]).subscribe(res => {
        // results[0] is our character
        // results[1] is our character homeworld
        res[0].species = res[1].name;
        this.character = res[0];
      });

      console.log(this.character);

    });
  }

}