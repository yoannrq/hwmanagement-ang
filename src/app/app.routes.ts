import { Routes } from '@angular/router';

export const routes: Routes = [
  /* --DASHBOARD-- */
  {
    path: 'dashboard',
    // lazy loading
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (component) => component.DashboardComponent
      ),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  /* --USER-- */
  {
    path: 'users',
    // lazy loading
    loadComponent: () =>
      import('./features/user/user.component').then(
        (component) => component.UserComponent
      ),
  },
];
