import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  menuItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/teams', icon: 'groups', label: 'Équipes' },
    { path: '/users', icon: 'person', label: 'Utilisateurs' },
    { path: '/events', icon: 'event', label: 'Événements' },
    { path: '/reports', icon: 'assessment', label: 'Rapports' },
  ];
}
