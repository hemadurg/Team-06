import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterdoneComponent } from './registerdone/registerdone.component';
import { CardComponent } from './card/card.component';

=======
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { P1Component } from './p1/p1.component';
<<<<<<< HEAD
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';
import { D1Component } from './d1/d1.component';
=======
>>>>>>> 74ff6a4834a157bbbb091f346f8b3b2ffb95c99d
>>>>>>> bd847dc39d1cb4447a2bfb439883ae68ef3e2b93

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    BannerComponent,
    
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    WelcomeComponent,
    FooterComponent,
    Navbar1Component,
    SignupComponent,
    RegisterdoneComponent,
    CardComponent,
    
=======
    CardComponent,
    NavbarComponent,
    BannerComponent,
<<<<<<< HEAD
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    R1Component,
    R2Component,
    R3Component,
    R4Component,
    D1Component
=======
    P1Component
>>>>>>> 74ff6a4834a157bbbb091f346f8b3b2ffb95c99d
>>>>>>> bd847dc39d1cb4447a2bfb439883ae68ef3e2b93
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
