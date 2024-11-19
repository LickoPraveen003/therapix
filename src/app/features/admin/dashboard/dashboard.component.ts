import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}
  navigateToHome(): void {
    this.router.navigate(['/admin/dashboard']);  // '/home' is the path to your home route
  }
}
