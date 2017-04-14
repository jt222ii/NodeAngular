import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

  //Send posts
  sendPost(message) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/newpost', message, {headers: headers})
      .map(res => res.json())
      .subscribe();
  }

}
