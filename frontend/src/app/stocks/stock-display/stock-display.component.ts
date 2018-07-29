import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import { Stock } from "../stock";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-stock-display',
  templateUrl: './stock-display.component.html',
  styleUrls: ['./stock-display.component.css']
})
export class StockDisplayComponent implements OnInit {
  stockCurrentlyDisplayed$: Observable<Stock>;
  userSelectedStock: Stock;

  constructor(private cdr: ChangeDetectorRef) { 
    this.userSelectedStock = {
      symbol: '',
      price: -1
    }
  }

  ngOnInit() { }

  onSubmit() {
    this.stockCurrentlyDisplayed$ = of(this.userSelectedStock);
    this.cdr.detectChanges();
  }
}
