import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

myForm: FormGroup;

  latitude = 51;
  longitude = 51;
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      mail: new FormControl('',[Validators.required, Validators.email]),
      organisation: new FormControl('option2',[]),
      question: new FormControl('',[Validators.required])
    })
  }

}
