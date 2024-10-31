// -- PACKAGE IMPORTS --
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// -- LOCAL IMPORTS --
import { environment } from '../../../environments/environment';
import { User, UserCreation } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  updateUser(user: UserCreation): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/${user.id}`, user);
  }

  createUser(user: UserCreation): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
}
