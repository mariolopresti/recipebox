import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMsg: string = '';

  onLogin(form: NgForm) {
    if (form.invalid) return;

    this.authService.login(form.value).subscribe({
      next: () => {
        console.log('Login effettuato!');
        this.router.navigate(['/']); // Naviga alla lista ricette
      },
      error: (err) => {
        this.errorMsg = 'Credenziali non valide. Riprova.';
      },
    });
  }
}
