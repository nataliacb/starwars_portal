import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { charactersRouting } from './character/character.routing';
import { CharacterModule } from './character/character.module';
import { starshipsRouting } from './starship/starship.routing';
import { StarshipModule } from './starship/starship.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CharacterModule,
    routing,
    charactersRouting,
    starshipsRouting,
    StarshipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
