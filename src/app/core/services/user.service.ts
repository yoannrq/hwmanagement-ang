// -- PACKAGE IMPORTS --
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// -- LOCAL IMPORTS --
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}
