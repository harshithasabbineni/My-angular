import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
@Component({
  selector: 'search-product',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
 searchItem:any;
 constructor(private route:ActivatedRoute){};
 ngOnInit(){
  this.route.params.subscribe((p)=>{
    this.searchItem=p;
    console.log(p);
  });
 }
}
