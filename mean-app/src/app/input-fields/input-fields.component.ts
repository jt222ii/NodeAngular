import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    alert();
  }

}
