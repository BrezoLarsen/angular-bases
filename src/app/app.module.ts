import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './counter/counter.component';
import { HeroComponent } from './heros/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
