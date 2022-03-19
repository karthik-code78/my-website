import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { ThemeLoaderService } from '../../services/theme-loader.service';

@Component({
  selector: 'app-home',
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('1000ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      // transition(':leave', [
      //   animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      // ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstWelcomeText: boolean = true;
  secondWelcomeText: boolean = false;
  // thirdWelcomeText: boolean = false;

  constructor(public themeLoaderService: ThemeLoaderService) {}

  ngOnInit(): void {
    this.initializeText();
    //   setTimeout(() => {
    //     this.firstWelcomeText = false;
    //     this.secondWelcomeText = true;
    //   }, 5000);
    // }
  }

  initializeText() {
    setTimeout(() => {
      this.firstWelcomeText = false;
      this.secondWelcomeText = true;
    }, 5000);
    setTimeout(() => {
      this.secondWelcomeText = false;
    }, 10000);
  }
}
