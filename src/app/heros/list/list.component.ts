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
    // const deletedHero = this.heros.pop();
    // this.deletedHeros.push(deletedHero);

    // Otra forma
    this.deletedHero = this.heros.shift() ||undefined;
  }

}
