import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:true,
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class ChildComponent {
 @Input() greet="";
}
