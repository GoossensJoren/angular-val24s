import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { FormModel } from 'src/app/Models/form-model';
import { EmailService } from 'src/app/Services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;
  public loading: boolean = false;
  public enabled = true;

  latitude = 51.107379;
  longitude = 4.915008;
  constructor(private snackBar: MatSnackBar,
    private mailService: EmailService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      organisation: new FormControl('option1', []),
      question: new FormControl('', [Validators.required])
    })
  }

  submit(contactForm: FormGroupDirective) {
    this.loading = true;
    var formContent = new FormModel();
    formContent.Email = this.myForm.get('mail').value;
    formContent.Name = this.myForm.get('name').value;
    formContent.Option = this.myForm.get('organisation').value;
    formContent.Text = this.myForm.get('question').value;
    this.mailService.sendMail(formContent).subscribe(response => {
      this.snackBar.open('Succes, het formulier is verzonden', "Ok", {
        duration: 5000
      });
      this.enabled = false;
      contactForm.resetForm();
      this.myForm.reset();
    },
      error => {
        this.snackBar.open('Error, er is iets fout gegaan, bereik ons via facebook bij dringende vragen', "Ok", {
          duration: 5000
        });
      }).add(() => {
        this.loading = false;
        
      })

  }

}
