import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { User } from '../../core/models/user.model';
import { Role } from '../../core/models/role.model';
import { UserService } from '../../core/services/user.service';
import { RoleService } from '../../core/services/role.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: User[] = [];
  roles: Role[] = [];
  filteredUsers: User[] = [];

  searchValue: string = '';
  selectedRole: string = '';

  constructor(
    private userService: UserService,
    private roleService: RoleService
  ) {}

  ngOnInit() {
    // Load users with filters applied
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.applyFilters();
    });

    // Load roles
    this.roleService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  // Handling change in the search bar
  onSearchChange(event: any) {
    this.searchValue = event.target.value;
    this.applyFilters();
  }

  // Handling change in the role filter
  onRoleChange(event: any) {
    this.selectedRole = event.target.value;
    this.applyFilters();
  }

  /**
   * Filters the users array based on search value and role selection.
   *
   * @description
   * This function applies two types of filters:
   * - A search filter that matches against user's firstname, lastname, and email
   * - A role filter that matches the exact role name
   *
   * The search is case-insensitive and matches partial strings.
   * If no filters are applied (searchValue and selectedRole are empty/null),
   * all users will be returned.
   *
   * @returns {void} Updates the filteredUsers property with the filtered results
   */
  applyFilters(): void {
    this.filteredUsers = this.users.filter((user) => {
      // Search verification
      const matchesSearch =
        !this.searchValue ||
        user.firstname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.lastname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchValue.toLowerCase());

      // Role verification
      const matchesRole =
        !this.selectedRole || user.roleName === this.selectedRole;

      // Return user if it matches both search and role filters
      return matchesSearch && matchesRole;
    });
  }
}
