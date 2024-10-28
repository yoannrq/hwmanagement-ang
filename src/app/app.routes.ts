import { Routes } from '@angular/router';

export const routes: Routes = [
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
];
