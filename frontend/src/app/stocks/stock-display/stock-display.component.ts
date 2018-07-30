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
  selectedRange: string;
  currentRange: string;

  rangeMap = {
    '5 years': '5y',
    '2 years': '2y',
    '1 year': '1y',
    'year-to-date': 'ytd',
    '6 months': '6m',
    '3 months': '3m',
    '1 month': '1m',
    '1 day': '1d'
  };

  allowedRanges = Object.keys(this.rangeMap);

  constructor() {
    this.userSelectedStock = {
      symbol: '',
      price: -1,
      lastUpdated: new Date()
    }
  }

  ngOnInit() { }

  onSubmit() {
    this.currentRange = this.rangeMap[this.selectedRange];
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
