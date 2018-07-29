import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Stock } from '../../stock';
import { PriceService } from '../../price.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceDisplayComponent implements OnInit {
  @Input() stockObservable$: Observable<Stock>;
  stockSymbol$: Observable<String>;
  stockPrice$: Observable<number>;
  
  constructor(private priceService: PriceService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getStockPrice();
  }

  getStockPrice(): void {
    this.stockObservable$.subscribe(incomingStock => {
      this.priceService.getStockPrice(incomingStock.symbol)
      .subscribe(stockData => {
        this.stockSymbol$ = of(stockData.symbol);
        this.stockPrice$ = of(stockData.price);
        this.cdr.detectChanges();
      });
    });
  }
}
