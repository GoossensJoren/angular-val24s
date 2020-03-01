import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

myForm: FormGroup;

  latitude = 51.107379;
  longitude = 4.915008;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      mail: new FormControl('',[Validators.required, Validators.email]),
      organisation: new FormControl('option2',[]),
      question: new FormControl('',[Validators.required])
    })
  }

  submit() {
    this.snackBar.open('Dit formulier is nog niet aangesloten, gelieve uw vraag via de facebookpagina te stellen', "Ok", {
      duration: 5000
    });
  }

}
