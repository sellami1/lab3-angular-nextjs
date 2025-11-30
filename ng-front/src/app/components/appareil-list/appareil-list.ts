import { Component, Input } from '@angular/core';
import { Appareil } from '../../core/models/appareil.model';
import { AppareilService } from '../../core/appareil.service';

@Component({
  selector: 'app-appareil-list',
  standalone: false,
  templateUrl: './appareil-list.html',
  styleUrl: './appareil-list.css',
})
export class AppareilList {
	
  appareils: any[] = [];

  constructor(
    private service: AppareilService  // Injected for API calls
  ) {}

  ngOnInit() {
    // API call: Fetch all devices on init (subscribe to Observable)
    this.service.getAll().subscribe((devices) => {
		this.appareils = devices;
		console.log("From list: " + this.appareils);
	});  // Example usage – load devices
  }

}
