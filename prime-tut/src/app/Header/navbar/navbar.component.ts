import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { ThemeLoaderService } from '../../services/theme-loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  themeLoader: boolean = false;

  constructor(public themeLoaderService: ThemeLoaderService) {}

  ngOnInit(): void {
    this.initializeNavbarItems();
  }

  // Functions start
  initializeNavbarItems() {
    this.items = [
      {
        label: 'Home ',
      },
      {
        label: 'About ',
      },
      {
        label: 'Contact ',
      },
    ];
  }

  onThemeChange() {
    this.themeLoader = true;
    setTimeout(() => {
      if (this.themeLoaderService.theme == 'Dark') {
        this.themeLoaderService.theme = 'Light';
        console.log(this.themeLoaderService.theme);
        document.body.classList.toggle('light-theme');
      } else {
        this.themeLoaderService.theme = 'Dark';
        document.body.classList.toggle('light-theme');
        console.log(this.themeLoaderService.theme);
      }
      this.themeLoader = false;
    }, 2000);
  }
}
