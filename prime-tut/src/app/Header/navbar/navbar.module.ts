import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

import { PrimeCustomModule } from '../../Modules/prime-custom/prime-custom.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeCustomModule,
    RouterModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
