import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})

export class HeroComponent {
  name: string = 'Ironman';
  age: number = 45;

  get capitalizedName(): string { // NO ES UN MÉTODO, ES UNA PROPIEDAD, POR ESO EN EL HTML VA SIN (): con get creamos una propiedad que será procesada cuando la llamemos
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 35;
  }
}
