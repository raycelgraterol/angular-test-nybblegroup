import { Component, OnInit } from '@angular/core';

import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  taxes = [0.00,10.50,21.00,27.00];
  taxHasError = true;

  invoiceModel = 
  new Invoice( Guid.create(),new Date().toLocaleDateString(),null,null,"");

  invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.getInvoices();
  }
  
  validateTax(value){
    if(value === 'default'){
      this.taxHasError = true;
    }else{
      this.taxHasError = false;
    }
  }

  onSubmit(){
    this.invoiceService.addInvoice(this.invoiceModel as Invoice)
      .subscribe(invoice => {
        this.invoices.push(invoice);
      });
  }


  getInvoices(): void {
    this.invoiceService.getInvoices()
    .subscribe(invoices => this.invoices = invoices);
  }

/*
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