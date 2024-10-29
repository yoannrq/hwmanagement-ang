import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToastComponent } from './shared/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hwmanagement-ang';
}
