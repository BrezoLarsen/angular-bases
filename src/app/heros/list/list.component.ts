import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHeros: string[] = [];
  deletedHero: string = '';

  deleteHero() {
    this.deletedHero = this.heros.shift() ||undefined;
  }

}
