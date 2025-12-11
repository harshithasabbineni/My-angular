import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
 @Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngApp');
  name="";
  updateName(x:Event)
  {
    //this.name=x.target.value;
    this.name=(x.target as HTMLInputElement).value;
  }
}
