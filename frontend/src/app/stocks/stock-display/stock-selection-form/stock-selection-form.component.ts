import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Stock } from '../../stock';

@Component({
  selector: 'app-stock-selection-form',
  templateUrl: './stock-selection-form.component.html',
  styleUrls: ['./stock-selection-form.component.css']
})
export class StockSelectionFormComponent implements OnInit {
  stock: Stock;
  @Output() stockSymbolSubmission = new EventEmitter<Stock>();

  onSubmit() {
    this.stockSymbolSubmission.emit(this.stock);
  }

  constructor() {
    this.stock = {
      symbol: '',
      price: -1
    }
  }

  ngOnInit() { }

}
