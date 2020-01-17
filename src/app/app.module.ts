import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceService } from './invoice.service';
import { MessageService } from './message.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, BannerComponent, InvoiceComponent, WeatherComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InvoiceService, MessageService, WeatherService]
})
export class AppModule { }
