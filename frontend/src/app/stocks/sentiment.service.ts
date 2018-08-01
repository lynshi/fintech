import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable, throwError} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  sentimentServiceUrl = 'http://127.0.0.1:5000/api/v1/stock-sentiment/';

  constructor(private http: HttpClient) { }

  getStockSentiment(companyName: string) : Observable<any> {
    companyName = encodeURIComponent(companyName);
    return this.http.get(this.sentimentServiceUrl + companyName)
      .pipe(
        retry(3),
        catchError(SentimentService.handleError)
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
