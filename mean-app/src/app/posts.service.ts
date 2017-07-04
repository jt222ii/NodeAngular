import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Injectable()
export class PostsService {

  private url = 'http://localhost:3000';
  private socket;

  constructor(private http: Http) {

   }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  getNewPosts() {
    let obs = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (messageObj) => {
        console.log("get:")
        console.log(messageObj);
        observer.next(messageObj);
      })

      return () => {
        this.socket.disconnect();
      };
    })
    return obs;
  }
  

  //Send posts
  sendPost(messageObj) {
    //Emit to all users
    console.log("send:")
    console.log(messageObj)
    this.socket.emit('add-post', messageObj);

    //save in mongodb
    let newPost = JSON.stringify({ name: messageObj.name, message: messageObj.message, imglinks: messageObj.imglinks})
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/newpost', newPost, {headers: headers})
      .map(res => res.json())
      .subscribe();
  }

}
