import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule,RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='Routing';
}
