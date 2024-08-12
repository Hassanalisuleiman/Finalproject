import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ShehiaService } from '../../service/shehia.service';
 // Import the Shehia service

@Component({
  selector: 'app-register-sheha',
  templateUrl: './register-sheha.component.html',
  styleUrls: ['./register-sheha.component.css']
})
export class RegisterShehaComponent implements OnInit {
  user = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    status: '',
    role: 'citizen', // default role
    shehia_id: null // Foreign key to store the selected shehia_id
  };

  isLoading = false;
  message: string | null = null;
  isSuccess = false;
  shehias: any[] = []; // Array to store shehias

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
