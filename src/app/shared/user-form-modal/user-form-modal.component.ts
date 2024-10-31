import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-user-form-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form-modal.component.html',
  styleUrl: './user-form-modal.component.css',
})
export class UserFormModalComponent {
  // Receive and emit data to parent component
  @Input() user: User | undefined;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email]],
      password: [''],
    });
  }

  ngOnInit() {
    if (this.user) {
      this.userForm.patchValue({
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        password: this.user.password,
      });
    }
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = {
        ...this.userForm.value,
        id: this.user?.id,
      };
      this.save.emit(userData);
    }
  }
}
