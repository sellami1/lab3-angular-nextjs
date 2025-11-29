import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppareilService } from '../../core/appareil.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(
    private router: Router,  // Injected for TS routing
    private service: AppareilService  // Injected for API calls
  ) {}

  ngOnInit() {
    // API call: Fetch all devices on init (subscribe to Observable)
    // this.service.getAll().subscribe(devices => console.log(devices));  // Example usage – load devices
  }

  // Routing from TS: Programmatic nav (appropriate for logic, e.g., after API or confirmation)
  goToLogin()   { this.router.navigate(['/login']); }

  // Routing from TS: Programmatic nav with potential added logic
  goToContact() { this.router.navigate(['/contact']); }

}
