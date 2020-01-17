import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  imgSrc = 'https://i.ibb.co/71cJvzy/Code-Challenge-Banner.jpg';

  constructor() { }
  
  ngOnInit() {
  }

}