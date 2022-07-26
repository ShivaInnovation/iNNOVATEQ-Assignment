import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService{
    private apiUrl = environment.baseUrl;
    constructor(private http: HttpClient){}

    getPosts():Observable<Post[]>{
        return this.http.get<Post[]>(`${this.apiUrl}/posts`);
    }

    getPost():Observable<Post>{
        return this.http.get<Post>(`${this.apiUrl}/posts/1`);
    }
}