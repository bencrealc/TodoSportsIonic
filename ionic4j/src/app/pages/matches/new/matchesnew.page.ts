import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-matchesnew',
  templateUrl: './matchesnew.page.html',
  styleUrls: ['./matchesnew.page.scss'],
})
export class MatchesNewPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      local: ['', [Validators.required, Validators.minLength(5)]],
      visitante: ['', [Validators.required, Validators.minLength(5)]],
      //dob: [this.defaultDate]
    });
  }

  /* getDate(e){
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, 
      onlyself: true
    )
  }*/

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }
}
