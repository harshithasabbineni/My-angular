import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomPipe } from './custom-pipe';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CustomPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='Angular 20 App';
}
