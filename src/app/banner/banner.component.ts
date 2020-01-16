import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  imgSrc = 'https://lh4.googleusercontent.com/v-urBleFlsarZJDz7-Wpe7KNH8xtS6Et1nmrt53UV2BROtFZhjEr15F5dyGdougy0JBpzCH_BTaZqcxf_M2A=w1366-h663';

  constructor() { }
  
  ngOnInit() {
  }

}