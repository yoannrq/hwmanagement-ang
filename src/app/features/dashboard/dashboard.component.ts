import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, catchError, of } from 'rxjs';

import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userCount$: Observable<number>;

  constructor(private userService: UserService) {
    this.userCount$ = new Observable();
  }

  ngOnInit(): void {
    // Init userCount$ with the number of users
    this.userCount$ = this.userService.getUsers().pipe(
      map((users: User[]) => users.length),
      catchError((error) => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
        return of(0);
      })
    );
  }
}
