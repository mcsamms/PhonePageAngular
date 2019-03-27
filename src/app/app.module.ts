import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhonesStarterComponent } from './phones-starter/phones-starter.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonesStarterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
