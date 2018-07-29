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
      price: -1
    }
  }

  ngOnInit() { }

  onSubmit() {
    this.stockCurrentlyDisplayed = {...this.userSelectedStock};
  }
}
