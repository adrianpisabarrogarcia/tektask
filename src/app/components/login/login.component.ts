import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  onSubmit() {
    if (!this.email || !this.password) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email and password are required' });
      return;
    }
    this.authService.login(this.email, this.password)
      .pipe(
        catchError((error) => {
          if (error.status !== 200) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login failed with status: ' + error.status });
          }
          return throwError(() => error);
        })
      )
      .subscribe((data) => {
        if (data) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successful' });
          sessionStorage.setItem('userToken', 'token1234567890');
          this.router.navigate(['/dashboard']);
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login failed' });
        }
      });
  }
}
