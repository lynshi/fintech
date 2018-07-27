import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';

import { Stock } from './stock'

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  iexStockUrl = 'https://api.iextrading.com/1.0/stock/';

  constructor(private http: HttpClient) { }

  getStockPrice(symbol: string) : Observable<Stock> {
    return this.getStockPriceFromIEX('MSFT').pipe(map(res => {
      let stock : Stock;
      stock = {
        symbol: symbol,
        price: res[res.length - 1]['close']
      };
      console.log(res[res.length - 1]);
      return stock;
    }));
  }

  getStockPriceFromIEX(symbol: string) {
    return this.http.get(this.iexStockUrl + symbol + '/chart/1d')
      .pipe(
        retry(3),
        catchError(PriceService.handleError)
      );
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}
