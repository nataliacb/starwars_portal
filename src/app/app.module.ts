import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';


//Importar Modules, Services e Routing criados
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { charactersRouting } from './character/character.routing';
import { CharacterModule } from './character/character.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    CharacterModule,
    routing,
    charactersRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
