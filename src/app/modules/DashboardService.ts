
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Post } from './posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  cards() {
    return [71, 78, 39, 66];
  }
    
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }
}