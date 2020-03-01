import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';

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
    ]),
    trigger('popOverState',[
      state('show',style({
        opacity: 1
      })),
      state('hide',style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ])
  ]
})
export class TvhComponent implements OnInit {

  constructor() { }

  groups : Array<{name:string,link:string,show:boolean}>;

  ngOnInit() {
    this.groups = [{name:"HSV",link:"https://www.facebook.com/pages/category/Soccer-Field/HSV-Tongerlo-832768450409166/",show:false},
    {name:"FIEN BOYS",link:"http://fienboys.be/",show:false},
    {name:"KFC TONGERLO",link:"https://www.kfctongerlo.be/",show:false},
    {name:"CHIRO",link:"http://www.chirotongerlo.be/",show:false},
    {name:"KLJ",link:"http://kljtongerlo.be/",show:false},
    {name:"LANDELIJKE GILDE",link:"http://www.lgtongerlo.be/",show:false},
    {name:"VOLLEY WESTERLO",link:"https://www.volleywesterlo.be/",show:false},
    {name:"T-BLAZERS",link:"https://www.facebook.com/fanfareTblazers/",show:false},
    {name:"KKSVWO",link:"https://www.kksvwo.be/",show:false}
      ]
  }

  stateName(i : any) : string{
    return this.groups[i].show ? 'show' : 'hide';
  }

  toggle(i: any){
    this.groups[i].show = !this.groups[i].show;
  }
}
