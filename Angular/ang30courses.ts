import { Component,input } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone:true,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
course="Mean Stack";
topic=input<string>("");
}
