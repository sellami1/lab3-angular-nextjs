import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../../core/appareil.service';
import { Appareil } from '../../core/models/appareil.model';

@Component({
  selector: 'app-appareil-detail',
  standalone: false,
  templateUrl: './appareil-detail.html',
  styleUrl: './appareil-detail.css',
})
export class AppareilDetail {

  id!: string;
  appareil!: Appareil;

  constructor(
    private route: ActivatedRoute,  // Injected for route params access
    private service: AppareilService  // Injected for API calls
  ) { }

  ngOnInit() {
    // Route params: Retrieve ':id' from URL (snapshot for simple cases)
    this.id = this.route.snapshot.paramMap.get('id')!;

    // API call: GET one device using the param (subscribe to Observable)
    this.service.getOne(this.id).subscribe(a => this.appareil = a);
  }

}
