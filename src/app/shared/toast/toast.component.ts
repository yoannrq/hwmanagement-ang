import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { ToastService } from '../../core/services/toast.service';
import { Toast } from '../../core/models/toast.model';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="visible" class="toast" [ngClass]="currentToast?.type">
      {{ currentToast?.message }}
    </div>
  `,
  styles: [
    `
      .toast {
        position: fixed;
        top: 20px;
        right: 30px;
        padding: 15px;
        border-radius: 4px;
        color: white;
        z-index: 1000;
        animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
      }

      .error {
        background-color: #dc3545;
      }

      .success {
        background-color: #28a745;
      }

      .info {
        background-color: #17a2b8;
      }

      .warning {
        background-color: #ffc107;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `,
  ],
})
export class ToastComponent implements OnInit, OnDestroy {
  visible = false;
  currentToast?: Toast;
  private subscription?: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.subscription = this.toastService.toast$.subscribe((toast) => {
      this.currentToast = toast;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 10000);
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
