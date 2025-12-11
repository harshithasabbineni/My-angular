import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ChildComponent} from './child/child';
@Component({
  selector: 'app-root',
  standalone:true,
  imports:[FormsModule,CommonModule,ChildComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title='myApp';
  message="hello child";
}

