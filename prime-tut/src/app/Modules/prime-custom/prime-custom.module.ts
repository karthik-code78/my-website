import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    ProgressBarModule,
    ToggleButtonModule,
  ],
})
export class PrimeCustomModule {}
