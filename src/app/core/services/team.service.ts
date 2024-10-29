import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private baseUrl = `${environment.apiUrl}/team`;

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.baseUrl);
  }
}
