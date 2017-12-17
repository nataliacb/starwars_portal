import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Character } from './../character.model';
import { CharacterService } from './../character.service';


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
      let id1 = params['id'];

      this.charactersService.getCharacter(id1)
        .subscribe( character => this.character = character);
    });
  }

}