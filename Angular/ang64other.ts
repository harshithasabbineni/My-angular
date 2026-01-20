import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  standalone: true,
  template: `
    <div class="container">
      <h2>Other Component</h2>
      <p>This is styled using NONE encapsulation (global)</p>
    </div>
  `
})
export class OtherComponent {}
