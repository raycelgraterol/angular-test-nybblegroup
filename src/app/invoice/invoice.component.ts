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
  submitted = false;

  invoiceModel = 
  new Invoice(Guid.create(),new Date().toLocaleDateString(),null,null,"");

  invoices: Invoice[];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoices = [];
    this.getInvoices();
  }
  
  validateTax(value){
    if(value == ""){
      this.taxHasError = true;
    }else{
      this.taxHasError = false;
    }
  }

  onSubmit(){

    this.submitted = true;
    this.invoices.push(this.invoiceModel as Invoice);
    let invocicesList = JSON.stringify(this.invoices);
    localStorage.setItem("invoices", invocicesList);
    this.invoiceModel = 
  new Invoice(Guid.create(),new Date().toLocaleDateString(),null,null,"");
    /*this.invoiceService.addInvoice(jInvociceModel as Invoice)
      .subscribe(invoice => {
        this.invoices.push(invoice);
      });*/
  }


  getInvoices(): void {
    this.invoices =  JSON.parse(localStorage.getItem("invoices")) as Invoice[];
    /*this.invoiceService.getInvoices()
    .subscribe(invoices => this.invoices = invoices);*/
  }

  delete(invoice: Invoice): void {
    this.invoices = this.invoices.filter(i => i !== invoice);
    //this.invoiceService.deleteInvoice(invoice).subscribe();
  }

  clearForm(): void {
    this.submitted = false;
    this.invoiceModel = new Invoice(Guid.create(),new Date().toLocaleDateString(),null,null,"");
  }

  invoice: Invoice = {
    id:1,
    creationDate: new Date().toLocaleDateString(),
    invoiceNumber: 100,
    net: 100,
    tax: 21.00
  };

  total = this.invoice.net * (1+(this.invoice.tax/100));

}