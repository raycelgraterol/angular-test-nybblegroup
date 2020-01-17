import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  imgSrc = 'https://lh3.googleusercontent.com/J2dv9uxj5Oz7cghuNuLzEaPwtxZcchTtZB2uj6n7w5DVV6aO3ZFotop433P0rhIY_kThmd7TPpGEhSD1Z0vB=w1366-h663';

  constructor() { }
  
  ngOnInit() {
  }

}