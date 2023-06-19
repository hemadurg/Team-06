import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
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
