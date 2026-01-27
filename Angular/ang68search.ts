import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'search-product',
  standalone:true,
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
 x:any;
 constructor(private route:ActivatedRoute){};
 ngOnInit(){
  this.route.params.subscribe((p)=>{
    this.x=p['id'];
    //this.x=this.route.snapshort params['id'];
    console.log(this.x);
  });
 }
}
export default Search;
