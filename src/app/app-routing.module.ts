import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterdoneComponent } from './registerdone/registerdone.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'banner',component:BannerComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  { path:'signup',component:SignupComponent},
  {path:'registerdone',component:RegisterdoneComponent},
  {path:'contact',component:ContactComponent},
  {path:'card',component:CardComponent},
  {path:'about',component:AboutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
