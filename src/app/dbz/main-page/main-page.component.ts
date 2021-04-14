import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  new: Character = {
    name: 'Maestro Roshi',
    power: 1000
  }

  addNewCharacter( character: Character ) {
    this.characters.push(character);
  }

}
