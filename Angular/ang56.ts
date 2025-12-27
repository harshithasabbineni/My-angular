import { Component, signal } from '@angular/core';
import { SortPipe } from './sort-pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CommonModule,SortPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sort-json-app');
  cars=[
    {name:'Toyota',type:'SUV',price:35000},
    {name:'Honda',type:'Sedan',price:28000},
    {name:'Ford',type:'Truck',price:40000},
    {name:'Tesla',type:'Electronic',price:50000},
  ];
}
