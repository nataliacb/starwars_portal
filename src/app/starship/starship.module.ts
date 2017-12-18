import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { StarshipComponent } from "./starship.component";
import { StarshipDetailComponent } from './detail/starship.detail.component';
import { StarshipService } from './starship.service';

@NgModule({
    declarations: [
        StarshipComponent,
        StarshipDetailComponent,
    ],
    exports: [ StarshipComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    providers: [
        StarshipService
    ]
})
export class StarshipModule{}