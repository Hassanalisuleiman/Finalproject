import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { finalize } from 'rxjs/operators';
import { ShehiaService } from '../../service/shehia.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    status: '',
    street: '',
    house_no: '',
    gender: '',
    phone_no: '',
    zan_id: '',
    tz_id: '',
    shehia_id: null,
    role: 'citizen' // default role
  };

  isLoading = false;
  message: string | null = null;
  isSuccess = false;
  shehias: any[] = [];

  constructor(private authService: AuthService, private router: Router, private shehiaService: ShehiaService) { }
  ngOnInit(): void {
    this.loadShehias(); // Load shehias on component initialization
  }
  loadShehias(): void {
    this.shehiaService.getAllShehias().subscribe(
      data => {
        this.shehias = data;
      },
      error => {
        console.error('Error loading shehias', error);
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.message = null;

    const startTime = Date.now(); // Capture the start time

    this.authService.register(this.user).pipe(
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = 4000 - elapsedTime;

        // Ensure at least 4 seconds of loading time
        setTimeout(() => {
          this.isLoading = false;

          if (this.isSuccess) {
            this.message = 'Registration successful!';
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 2000); // Redirect after 2 seconds
          } else {
            this.message = 'Registration failed. Please try again.';
          }
        }, remainingTime > 0 ? remainingTime : 0);
      })
    ).subscribe({
      next: () => {
        this.isSuccess = true;
      },
      error: () => {
        this.isSuccess = false;
      }
    });
  }
}
