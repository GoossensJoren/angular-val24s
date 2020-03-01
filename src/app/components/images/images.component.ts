import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, state } from '@angular/animations';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '100ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class ImagesComponent implements OnInit {

  images: number[] = [1, 2, 3, 4, 5];
  selectedIndex: number = 1;
  amountCols = 4;

  selectedImageStyle: Object = { border: 'solid 5px rgb(235, 161, 25)' };
  notSelectedImageStyle: Object = {};

  constructor() {
    let width = window.innerWidth;
    if (width <= 500) {
      this.amountCols = 3;
    }
  }

  ngOnInit() {
  }

  ImageSelected(index: number) {
    this.selectedIndex = (index + 1);
  }

  nextImage() {
    if (this.selectedIndex == this.images.length) {
      this.selectedIndex = 1;
      return;
    }
    ++this.selectedIndex;
  }

  prevImage() {
    if (this.selectedIndex == 1) {
      this.selectedIndex = this.images.length;
      return;
    }
    --this.selectedIndex;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let width = event.target.innerWidth;
    if (width <= 500) {
      this.amountCols = 3;
    } else {
      this.amountCols = 4;
    }
  }
}



