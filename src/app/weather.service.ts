import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  private weatherUrl = 'https://cryptic-fortress-35445.herokuapp.com/weather';  // URL to web api

  weather :any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getWeatherList(): Observable<any[]> {
    return this.http.get<any[]>(this.weatherUrl)
      .pipe(
        tap(_ => this.log('fetched weather')),
        catchError(this.handleError<any[]>('getWeatherList', []))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a InvoiceService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`InvoiceService: ${message}`);
  }

}