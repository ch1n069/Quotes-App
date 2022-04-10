import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public quotes: Quotez [] = [
    new Quotez(1,)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
