import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


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

  constructor(private router: Router, private messageService: MessageService) { }

  onSubmit() {
    if (this.email === 'admin@teknei.com' && this.password === 'admin') {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login correcto' });
      this.router.navigate(['/dashboard']);
      console.log('Login successful');
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Usuario o password incorrecto' });

    }
  }
}
