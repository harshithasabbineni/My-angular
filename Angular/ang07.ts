import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ecode:string="E01";
  eno:number=101;
  ename:string="Anil";
  esal:number=4555.85;
  egrade:string='a';
  ews:boolean=true;
}
