import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes,RouterModule,RouterLink,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='routing';
}
