import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../app/shared/services/toast.services';
import { LoaderService } from '../app/shared/services/loader.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private toastService: ToastService ,
    private loaderService: LoaderService

  ) {}
  
  onSubmit() {
    this.errorMessage = '';
    this.loaderService.show();
    
    setTimeout(() => {
      const storedUserData = localStorage.getItem('user');
      
      if (!storedUserData) {
        const userData = {
          email: this.email,
          password: this.password
        };
        localStorage.setItem('user', JSON.stringify(userData));
        this.loaderService.hide();
        this.toastService.show('Account created and logged in successfully', 'success');
        this.router.navigate(['/exams']);
        return;
      }

      const userData = JSON.parse(storedUserData);
      if (userData.email === this.email && userData.password === this.password) {
        this.loaderService.hide();
        this.toastService.show('Login successful', 'success');
        this.router.navigate(['/exams']);
      } else {
        this.errorMessage = 'Invalid email or password';
        this.loaderService.hide();
        this.toastService.show('Invalid email or password', 'error');
      }
    }, 2000);
  }
}