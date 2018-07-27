import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { PriceService } from './price.service';

@Component({
  selector: 'app-price-plots',
  templateUrl: './price-plots.component.html',
  styleUrls: ['./price-plots.component.css']
})
export class PricePlotsComponent implements OnInit {
  stock: Stock;

  constructor(private priceService: PriceService) {
    this.stock = {
      symbol: 'Stock Symbol',
      price: -1
    }
  }

  ngOnInit() {
    this.getStockPrice();
  }

  getStockPrice(): void {
    this.priceService.getStockPrice('MSFT')
      .subscribe(data => this.stock = { ...data });
  }
}
