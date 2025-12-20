import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './custom-pipe';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,CustomPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');
}
