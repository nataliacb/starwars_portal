import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Starship } from './starship.model';

import 'rxjs/Rx';

@Injectable()
export class StarshipService {
    private url: string = "https://swapi.co/api/starships/";

    constructor(private http: Http) { }

    getStarships() {
        return this.http.get(this.url)
            .map(res => res.json().results);
    }

    getStarship(id) {
        return this.http.get(this.getStarshipUrl(id))
            .map(res => res.json());
    }

    getPilots(id) {
        return this.http.get("https://swapi.co/api/people/"+  id)
            .map(res => res.json());
    }

    private getStarshipUrl(id) {
        return this.url + id;
    }

}
