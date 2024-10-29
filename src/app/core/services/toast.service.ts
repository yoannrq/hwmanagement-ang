import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Toast } from '../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<Toast>();
  toast$ = this.toastSubject.asObservable();

  showToast(message: string, type: Toast['type'] = 'info') {
    this.toastSubject.next({ message, type });
  }
}
