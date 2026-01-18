import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  standalone: true,
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>`,
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('Arthur Ussuy');
}
