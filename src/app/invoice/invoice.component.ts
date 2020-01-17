import { Component, OnInit } from '@angular/core';

import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  taxes = [0.00,10.50,21.00,27.00];

  invoiceModel = 
  new Invoice( 13,new Date().toLocaleDateString(),132,2000,10.5,0);

  invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices(): void {
    this.invoiceService.getInvoices()
    .subscribe(invoices => this.invoices = invoices);
  }

/*
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.invoiceService.addHero({ name } as Invoice)
      .subscribe(hero => {
        this.invoices.push(hero);
      });
  }

  delete(invoice: Invoice): void {
    this.invoices = this.invoices.filter(h => h !== hero);
    this.invoiceService.deleteHero(hero).subscribe();
  }*/

  invoice: Invoice = {
    id:1,
    creationDate: new Date().toLocaleDateString(),
    invoiceNumber: 100,
    net: 100,
    tax: 21.00
  };

  total = this.invoice.net * (1+(this.invoice.tax/100));

}