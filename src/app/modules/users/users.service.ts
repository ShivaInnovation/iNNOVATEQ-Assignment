import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "./user.model";

@Injectable({providedIn: 'root'})
export class UserService{
    private apiUrl = environment.baseUrl;
    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    getUser(): Observable<User>{
        return this.http.get<User>(`${this.apiUrl}/users/1`);
    }
}