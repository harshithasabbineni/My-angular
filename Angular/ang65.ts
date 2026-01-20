import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class App {
  title='Angular20 ShadowDOM Example';
}
export default App;
