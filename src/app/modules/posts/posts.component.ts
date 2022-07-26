import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.onGetPosts();
  }

  onGetPosts():void{
    this.postService.getPosts().subscribe({
      next: response => this.posts = response,
      error: error => console.log(error)
    })
  }

}
