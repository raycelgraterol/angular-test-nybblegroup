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
  mobile = false;
  first = false;
  second = false;
  sumNet: number;
  sumTax: number;
  sumInvoices: number;

  invoiceModel = 
  new Invoice(Guid.create(),new Date().toLocaleDateString(),null,null,"");

  invoices: Invoice[] = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.first = true;
    this.getInvoices();
    if (window.screen.width <= 450) { // 450px portrait
      this.mobile = true;
    }else{
      this.mobile = false;
    }
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
    this.invoiceModel = new Invoice(Guid.create(),new Date().toLocaleDateString(),null,null,"");
    /*this.invoiceService.addInvoice(jInvociceModel as Invoice)
      .subscribe(invoice => {
        this.invoices.push(invoice);
      });*/
  }


  getInvoices(): void {
    if (localStorage.getItem("invoices") !== null) {
      this.invoices = JSON.parse(localStorage.getItem("invoices")) as Invoice[];
    }
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

  //Process and Continue
  process() :void{
    this.first = false;
    this.second = true;
    this.sumNet = this.invoices.reduce((
      (accumulator: number, currentValue: Invoice) => accumulator = accumulator + +currentValue.net),
      0);
    this.sumTax = this.invoices.reduce((
      (accumulator: number, currentValue: Invoice) => accumulator = accumulator + +currentValue.tax),
      0);
    this.sumInvoices = this.invoices.reduce((
      (accumulator: number, currentValue: Invoice) => accumulator = accumulator + +currentValue.tax + +currentValue.net),
      0);
  }

  //Reset the work
  deleteWork() :void{
    this.first = true;
    this.second = false;
    this.invoices = [];
    localStorage.removeItem("invoices");
  }
}