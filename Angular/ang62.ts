import { Component,ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation:ViewEncapsulation.Emulated  //default can be omitted
})
export class App {
  title='Angular20 Emulated Example';
}
