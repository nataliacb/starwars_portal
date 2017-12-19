import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Character } from './character.model';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  providers: [ CharacterService ]
})
export class CharacterComponent implements OnInit {

  characters: any[];
  title: string;
  rota: string;

  constructor(private charactersService: CharacterService) {
    this.title = 'Character';
    this.rota = 'characters';
  }

    ngOnInit() {
      this.charactersService.getCharacters()
        .subscribe((characters: Character[])  => this.characters = characters);
    }

}
