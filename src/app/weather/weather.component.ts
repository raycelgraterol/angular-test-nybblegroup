import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherList :any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherList()
    .subscribe(weather => {
        this.weatherList = weather;
        console.log(this.weatherList[0]);
    })    
    
  }



}