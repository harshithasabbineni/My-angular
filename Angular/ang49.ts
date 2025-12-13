import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name:string="state bank";
}
