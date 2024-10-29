import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, catchError, of } from 'rxjs';

import { UserService } from '../../core/services/user.service';
import { TeamService } from '../../core/services/team.service';
import { ToastService } from '../../core/services/toast.service';
import { User } from '../../core/models/user.model';
import { Team } from '../../core/models/team.model';
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
  teamCount$: Observable<number>;

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private toastService: ToastService
  ) {
    this.userCount$ = new Observable();
    this.teamCount$ = new Observable();
  }

  ngOnInit(): void {
    // Init userCount$ with the number of users
    this.userCount$ = this.userService.getUsers().pipe(
      map((users: User[]) => users.length),
      catchError((error) => {
        this.toastService.showToast(
          'Erreur lors du chargement des utilisateurs',
          'error'
        );
        return of(0);
      })
    );

    // Init teamCount$ with the number of teams
    this.teamCount$ = this.teamService.getTeams().pipe(
      map((teams: Team[]) => teams.length),
      catchError((error) => {
        this.toastService.showToast(
          'Erreur lors du chargement des équipes',
          'error'
        );
        return of(0);
      })
    );
  }
}
