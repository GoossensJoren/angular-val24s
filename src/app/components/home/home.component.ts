import { Component, OnInit, HostListener } from '@angular/core';
import { NgxSwiperConfig } from 'ngx-image-swiper';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('popOverState',[
      state('show',style({
        opacity: 1
      })),
      state('hide',style({
        opacity: 0
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  rowHeight: string = "15vw";
  margin = "0px";
  opened = 0;
  show : boolean = false;

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

  constructor(private router: Router) {
    let width = window.innerWidth;
  if(width <= 500){
    this.rowHeight = "30vw";
  }
   }

  ngOnInit(){}

  onExpand1(){
    this.opened = 1;
    //this.margin = "350px";
  }

  onExpand2(){
    this.opened = 2;
    //this.margin = "1000px";
  }

  onExpand3(){
    this.opened = 3;
    //this.margin = "900px";
  }

  onClosed1(){
    if(this.opened == 1){
    this.margin = "0px";
    }
  }

  onClosed2(){
    if(this.opened == 2){
    this.margin = "0px";
    }
  }

  onClosed3(){
    if(this.opened == 3){
    this.margin = "0px";
    }
  }
  
  stateName() : string{
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }

  navigateToPictures(){
    this.router.navigate(['images']);
  }

@HostListener('window:resize', ['$event'])
onResize(event) {
  let width = event.target.innerWidth;
  if(width <= 500){
    this.rowHeight = "30vw";
  }else{
    this.rowHeight = "15vw";
  }
}




scroll(el: HTMLElement) {
  el.scrollIntoView({behavior:"smooth"});
}

}
