import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Invoice } from './invoice';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class InvoiceService {

  private invoicesUrl = 'https://cryptic-fortress-35445.herokuapp.com/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Get Invoices */
  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoicesUrl+"invoices")
      .pipe(
        tap(_ => this.log('fetched invoices')),
        catchError(this.handleError<Invoice[]>('getInvoices', []))
      );
  }


  //////// Save methods //////////

  /** POST: add a new invoice to the server */
  addInvoice (invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.invoicesUrl+"invoice", invoice, this.httpOptions).pipe(
      tap((newInvoice: Invoice) => this.log(`added invoice w/ id=${newInvoice.id}`)),
      catchError(this.handleError<Invoice>('addInvoice'))
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