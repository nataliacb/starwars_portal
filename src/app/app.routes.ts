import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { DetailComponent } from './character/detail/detail.component';
import { StarshipComponent } from './starship/starship.component';
import { StarshipDetailComponent } from './starship/detail/starship.detail.component';

const appRoutes: Routes  = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'characters', component: CharacterComponent },
    { path: 'characters/:id', component: DetailComponent },
    { path: 'starships', component: StarshipComponent },
    { path: 'starships/:id', component: StarshipDetailComponent },
];


export const routing = RouterModule.forRoot(appRoutes);