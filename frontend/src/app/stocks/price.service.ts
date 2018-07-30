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

  getStockPrice(symbol: string, range:string) : Observable<any[]> {
    return this.getStockPriceFromIEX(symbol, range).pipe(map(res => {
      let stock : Stock;
      let mostRecent = res[res.length - 1];
      let date = mostRecent['date'];

      if ('minute' in mostRecent) {
        let year = date.substr(0, 4);
        let month = date.substr(4, 2) - 1;
        let day = date.substr(6, 2);
        let minute = mostRecent['minute'];
        let time = minute.split(':');
        stock = {
          symbol: symbol,
          price: mostRecent['close'],
          lastUpdated: new Date(year, month, day, time[0], time[1])
        };
      }
      else {
        stock = {
          symbol: symbol,
          price: mostRecent['close'],
          lastUpdated: new Date(date)
        };
      }

      let time_arr = [];
      let price_arr = [];
      res.forEach((datum) => {
        let date = datum['date'];
        if ('minute' in datum) {
          let year = date.substr(0, 4);
          let month = date.substr(4, 2) - 1;
          let day = date.substr(6, 2);
          let minute = datum['minute'];
          let time = minute.split(':');

          time_arr.push((new Date(year, month, day, time[0], time[1]))
            .toLocaleTimeString([], {
              year: 'numeric', month: 'short', day: 'numeric' }));
        }
        else {
          let dateToPush = new Date(date);
          dateToPush.setHours(17, 0);
          time_arr.push((
            dateToPush.toLocaleTimeString([], {
              year: 'numeric', month: 'short', day: 'numeric',
            })));
        }

        price_arr.push(datum['close']);
      });

      return [stock, time_arr, price_arr];
    }));
  }

  getStockPriceFromIEX(symbol: string, range: string) : Observable<any> {
    return this.http.get(this.iexStockUrl + symbol + '/chart/' + range)
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
