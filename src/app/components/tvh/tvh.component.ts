import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-tvh',
  templateUrl: './tvh.component.html',
  styleUrls: ['./tvh.component.scss'],
  animations:[
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
export class TvhComponent implements OnInit {

  constructor() { }

  groups : string[];

  ngOnInit() {
    this.groups = ["HSV",
      "FIEN BOYS",
      "KFC TONGERLO",
      "CHIRO",
      "KLJ",
      "LANDELIJKE GILDE",
      "VOLLEY WESTERLO",
      "T-BLAZERS",
      "KKSVWO"]
  }

}
