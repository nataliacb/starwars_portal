import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Character } from './character.model';

import 'rxjs/Rx';

@Injectable()
export class CharacterService {
    private url: string = "https://swapi.co/api/people/";

    constructor(private http: Http) { }

    getCharacters() {
        return this.http.get(this.url)
            .map(res => res.json().results);
    }

    getCharacter(id) {
        return this.http.get(this.getCharacterUrl(id))
            .map(res => res.json());
    }

    private getCharacterUrl(id) {
        return this.url + id;
    }

    
}
