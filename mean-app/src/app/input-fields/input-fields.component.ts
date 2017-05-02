import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent implements OnInit {


  constructor(private postsService: PostsService) {
  }

  ngOnInit() {

  }
  submitted = false;
  inputName: string;
  inputMessage: string;
  onSubmit() { 
    if(!this.inputName ||!this.inputMessage|| !/\S/.test(this.inputName) || !/\S/.test(this.inputMessage))
    {
      return;
    }
    this.submitted = true; 

    let imgurlinks = this.inputMessage.match(/(https?:\/\/i.imgur.com\/(\w*\d\w*)+(\.[a-zA-Z]{3}))/g);

    let obj = { name: this.inputName, message: this.inputMessage, imgurlinks: imgurlinks }
    this.postsService.sendPost(obj);
    this.inputMessage = "";
  }
}
