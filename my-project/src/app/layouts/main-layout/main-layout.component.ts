import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  userName: string | null = null;
  userRole: string | null = null;
  role: any;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user ? user.first_name : 'Guest'; // Set to 'Guest' if the user name is not found
    this.userRole = user ? user.role : null; // Retrieve the role from the user data
    this.role = this.userRole;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isSheha(): boolean {
    return this.userRole === 'sheha';
  }

  isCitizen(): boolean {
    return this.userRole === 'citizen';
  }
}
