import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeLoaderService {
  theme: string = 'Dark';

  constructor() {}
}
