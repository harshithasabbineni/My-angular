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
  c:number |undefined;

  beforeA!:number;
  beforeB!:number;

  ngOnInit()
  {
    this.beforeA=this.a;
    this.beforeB=this.b;

    this.c=this.a;
    this.a=this.b;
    this.b=this.c;
  }
}
