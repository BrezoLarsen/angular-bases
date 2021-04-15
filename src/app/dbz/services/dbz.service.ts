import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {
  //Orden: propiedades - get/set - constructor - métodos

  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  get characters() {
    return [...this._characters]; /*... operador spread: separa cada uno de los elementos
                                    independientes del array y se crea uno nuevo Buena práctica de JS*/
  }

  constructor() {}

  addCharacter(character: Character) {
    this._characters.push(character);
  }

}
