import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotez } from '../quotez';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() quote!: Quotez
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
