import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';
import { D1Component } from './d1/d1.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    BannerComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    R1Component,
    R2Component,
    R3Component,
    R4Component,
    D1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
