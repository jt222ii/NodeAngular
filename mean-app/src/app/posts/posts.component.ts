import { OnInit, OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: any = [];
  connection;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });

    this.connection = this.postsService.getNewPosts().subscribe(message => {
      this.posts.push(message);
    })
  }

  ngOnDestroy(){
    this.connection.unsubscribe();
  }

}
