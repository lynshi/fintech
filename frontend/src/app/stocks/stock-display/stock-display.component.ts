import {Component, OnInit} from '@angular/core';
import { Stock } from "../stock";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css'],
})
export class StockDisplayComponent implements OnInit {
  stockCurrentlyDisplayed: Stock;
  userSelectedStock: Stock;

  constructor() {
    this.userSelectedStock = {
      symbol: '',
      price: -1,
      lastUpdated: new Date()
    }
  }

  ngOnInit() { }

  onSubmit() {
    this.stockCurrentlyDisplayed = {...this.userSelectedStock};
    this.stockCurrentlyDisplayed.symbol
      = this.stockCurrentlyDisplayed.symbol.toUpperCase();
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.onSubmit();
    }
  }
}
