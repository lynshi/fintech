import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Stock } from '../../stock';
import { PriceService } from '../../price.service';
import { StockSelectionFormComponent } from '../stock-selection-form/stock-selection-form.component'

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceDisplayComponent implements OnInit {
  @Input() stock: Stock;
  @Output() gotStockPrice = new EventEmitter<Stock>();

  constructor(private priceService: PriceService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() { this.cd.detectChanges(); }

  getStockPrice(): void {
    this.priceService.getStockPrice(this.stock.symbol)
      .subscribe(data => this.stock = { ...data });
    this.gotStockPrice.emit(this.stock);
  }
}
