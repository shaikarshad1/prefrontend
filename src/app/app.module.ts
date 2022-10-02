import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerApp } from './innerapp/innerapp.component';
import { OuterappComponent } from './outerapp/outerapp.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerApp,
    OuterappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
