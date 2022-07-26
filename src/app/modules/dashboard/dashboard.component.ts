import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { DashboardService } from '../DashboardService';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: any;
  constructor(private dashboardService: DashboardService) { }
  posts: Post[] = [];
  ngOnInit() {
   this.getPosts();
   this.cards = this.dashboardService.cards();
  }

  getPosts(){
    this.dashboardService.getPosts().subscribe({
      next: response => this.posts = response,
      error: error => console.log(error)
    })
  }

}
