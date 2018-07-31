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

@Component({
  selector: 'app-sentiment-display',
  templateUrl: './sentiment-display.component.html',
  styleUrls: ['./sentiment-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SentimentDisplayComponent implements OnInit {

  @Input() stock: Stock;
  sentiments: Observable<Sentiment[]>;

  constructor(private priceService: IEXService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.stock) {
      console.log(this.stock);
    }
  }

}
