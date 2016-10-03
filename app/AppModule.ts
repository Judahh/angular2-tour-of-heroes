import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './RXJS/RXJSExtensions';
import { AppComponent } from './AppComponent/AppComponent';
import { routing, routedComponents } from './app.routing';
import { HeroService } from './Hero/HeroService';
import { HeroSearchComponent } from './HeroSearch/HeroSearchComponent';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    routedComponents
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
