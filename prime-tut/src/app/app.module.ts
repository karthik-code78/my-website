import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Modules/home/home.component';
// import { NavbarComponent } from './Header/navbar/navbar.component';
import { NavbarModule } from './Header/navbar/navbar.module';

import { PrimeCustomModule } from './Modules/prime-custom/prime-custom.module';
import { AboutComponent } from './Modules/about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule, PrimeCustomModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
