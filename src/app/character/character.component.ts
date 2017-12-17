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

  characters: Character[] = [];
  
  constructor(private charactersService: CharacterService) {}
  
    ngOnInit() {
      this.charactersService.getCharacters()
        .subscribe(data => this.characters = data);
    }

}
