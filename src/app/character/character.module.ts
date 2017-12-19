import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { ListModule } from './../list/list.module';

import { CharacterComponent } from "./character.component";
import { DetailComponent } from './detail/detail.component';
import { CharacterService } from './character.service';


@NgModule({
    declarations: [
        CharacterComponent,
        DetailComponent,
    ],
    exports: [ CharacterComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        ListModule
    ],
    providers: [
        CharacterService
    ]
})
export class CharacterModule{}