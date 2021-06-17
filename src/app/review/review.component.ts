import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit  {
  title='reviw-result';
   review:any = []
  constructor(public http: HttpClient) { }
  ngOnInit(): void {
    this.getData();
  }
  
  getData(){
    const url ='assets/data/review.json'
    this.http.get(url).subscribe((res)=>{
      this.review = res
      console.log(this.review)
    })
    
  }


}
