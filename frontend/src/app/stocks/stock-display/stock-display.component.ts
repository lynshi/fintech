import {Component, OnInit, ViewChild} from '@angular/core';
import { PriceDisplayComponent } from "./price-display/price-display.component";
import { Stock } from "../stock";
import {StockDataService} from "../stock-data.service";

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {
  stock: Stock;
  @ViewChild('priceDisplay') priceDisplay: PriceDisplayComponent;

  constructor() { }

  ngOnInit() { }

  onStockSymbolSubmitted(stock: Stock) {
    this.stock = { ...stock };
    console.log(this.stock);
    this.priceDisplay.getStockPrice();
  }

  updateStock(stock: Stock) {
    this.stock = stock;
    console.log(this.stock);
  }
}
