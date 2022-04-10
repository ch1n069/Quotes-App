import { Component, OnInit } from '@angular/core';
import { Quotez } from '../quotez';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quotes: Quotez [] = [
    new Quotez(1,"Take a deep breath, pick yourself up, dust yourself off, and start all over again.","Frank Santra",0,0),
    new Quotez(2,"Take a deep breath, pick yourself up, dust yourself off, and start all over again.","Frank Santra",0,0),
    new Quotez(3,"You will fall many times in life, but you will pick yourself up and become stronger","Leon Brown",0,0),
    new Quotez(4,"To help yourself, you must be yourself. Be the best that you can be.","Dave peltzer",0,0),
    
  ];

  completeqoute(isComplete:boolean, index:number){
    if(isComplete){
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}`);
      if(toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }

  like(i:number){
    this.quotes[i].upvotes += 1;
    console.log(this.quotes[i])

  }

  dislikes(i:number){
    this.quotes[i].downvotes += 1;
  }

  delete(isComplete:boolean, index:number){
    if(isComplete){
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`);
      if(toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
