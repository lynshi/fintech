import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stock } from '../../stock';
import {IEXService} from "../../i-e-x.service";
import {Sentiment} from "./sentiment";
import {SentimentService} from "../../sentiment.service";

@Component({
  selector: 'app-sentiment-display',
  templateUrl: './sentiment-display.component.html',
  styleUrls: ['./sentiment-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SentimentDisplayComponent implements OnInit {
  @Input() stock: Stock;
  sentiments: Sentiment[];
  stockCompanyName$: Observable<string>;

  constructor(private iexService: IEXService,
              private sentimentService: SentimentService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.stock) {
      this.getStockSentiment();
    }
  }

  getStockSentiment() : void {
    this.iexService.getCompanyName(this.stock.symbol).subscribe(
      companyName => {
        this.stockCompanyName$ = of(companyName);
        this.cdr.detectChanges();

        this.sentimentService.getStockSentiment(companyName).subscribe(
          sentiments => {
            this.sentiments = [];
            console.log(sentiments);
            for (let sentiment in sentiments) {
              this.sentiments.push(new Sentiment(sentiment,
                sentiments[sentiment]));
            }
            this.cdr.detectChanges();
          })
      });
  }
}
