import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PercentPipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
}
