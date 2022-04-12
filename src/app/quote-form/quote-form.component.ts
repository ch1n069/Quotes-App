import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotez } from '../quotez';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  freshQuote = new Quotez(0,"","",0,0,0);

  @Output() addQuote = new EventEmitter<Quotez>();


  submitQuote(){
    this.addQuote.emit(this.freshQuote)
    

    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
