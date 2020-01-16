import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceService } from './invoice.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BannerComponent, InvoiceComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InvoiceService]
})
export class AppModule { }
