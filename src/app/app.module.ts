import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NextPageButtonComponent } from './next-page-button/next-page-button.component';
import { ConnectPageComponent } from './connect-page/connect-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroPageComponent,
    FooterComponent,
    AboutPageComponent,
    NextPageButtonComponent,
    ConnectPageComponent,
    ExperiencePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
