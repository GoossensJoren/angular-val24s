import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rowHeight: string = "20vw";

  constructor() { }

  ngOnInit(){}

onResize(event) {
  if(event.target.innerWidth <= 500){
    this.rowHeight = "35vw";
  }else{
    this.rowHeight = "20vw";
  }
}

scroll(el: HTMLElement) {
  el.scrollIntoView({behavior:"smooth"});
}

}
