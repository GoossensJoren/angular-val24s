import { Component, OnInit, HostListener } from '@angular/core';
import { NgxSwiperConfig } from 'ngx-image-swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rowHeight: string = "20vw";

  swiperConfig: NgxSwiperConfig = {
    navigationPlacement: 'inside',
    pagination: true,
    navigation: true,
    paginationPlacement: 'outside'
  };
 
  images = [
    '../../../assets/images/sponsors/sponsors1.png',
    '../../../assets/images/sponsors/sponsors2.png',
    '../../../assets/images/sponsors/sponsors3.png',
    '../../../assets/images/sponsors/sponsors4.png'
  ];

  constructor() {
    let width = window.innerWidth;
  if(width <= 500){
    this.rowHeight = "35vw";
  }
   }

  ngOnInit(){}


@HostListener('window:resize', ['$event'])
onResize(event) {
  let width = event.target.innerWidth;
  if(width <= 500){
    this.rowHeight = "35vw";
  }else{
    this.rowHeight = "20vw";
  }
}


scroll(el: HTMLElement) {
  el.scrollIntoView({behavior:"smooth"});
}

}
