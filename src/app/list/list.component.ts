import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() title: string;
  @Input() items: any[];
  @Input() rota: string;

  constructor() {}

  getId(item: any): number {
    let id = item.url.match('[0-9]+')[0];
    return id;
  }

}