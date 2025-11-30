import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
	
  constructor(
    private router: Router,  // Injected for TS routing
  ) {}

  ngOnInit() {
    // Example usage – load devices
  }

  // Routing from TS: Programmatic nav (appropriate for logic, e.g., after API or confirmation)
  goToLogin()   { this.router.navigate(['/login']); }

  // Routing from TS: Programmatic nav with potential added logic
  goToContact() { this.router.navigate(['/contact']); }

}
