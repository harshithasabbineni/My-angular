import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  a:number=5;
  b:number=3;

  x!:number;
  y!:number;

  ngOnInit()
  {
    this.x=this.a;
    this.y=this.b;
  let c=this.a;
  this.a=this.b;
  this.b=c;
  }
}
