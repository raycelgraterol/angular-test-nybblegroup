import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  taxes = [0.00,10.50,21.00,27.00];

  invoices: Invoice[];

  invoice: Invoice = {
    id:1,
    creationDate: new Date().toLocaleDateString(),
    invoiceNumber: 100,
    net: 100,
    tax: 21.00
  };

  total = this.invoice.net * (1+(this.invoice.tax/100));

  constructor() { }

  ngOnInit() {
  }

}