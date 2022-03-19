import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';
import { AboutComponent } from './Modules/about/about.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
