import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Stock } from '../../stock';
import { PriceService } from '../../price.service';
import { Observable, of } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceDisplayComponent implements OnInit {
  @Input() stock: Stock;
  stockSymbol$: Observable<String>;
  stockPrice$: Observable<number>;
  priceChart: Chart;
  displayChart = false;

  constructor(private priceService: PriceService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.stock) {
      this.getStockPrice();
    }
  }

  getStockPrice(): void {
    this.priceService.getStockPrice(this.stock.symbol)
      .subscribe(stockData => {
        this.stockSymbol$ = of(stockData[0].symbol);
        this.stockPrice$ = of(stockData[0].price);
        this.displayChart = true;
        this.cdr.detectChanges();

        this.priceChart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: stockData[1],
            datasets: [
              {
                data: stockData[2],
                borderColor: "#3cba9f",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            },
            responsive: true,
            position: "center"
          }
        });

        this.cdr.detectChanges();
      });
  }
}
