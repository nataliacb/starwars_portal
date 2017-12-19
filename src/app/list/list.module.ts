import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list.component';
import { routing } from '../app.routes';


@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ ListComponent],
    exports: [ ListComponent ]
})
export class ListModule {}