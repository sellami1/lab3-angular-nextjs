import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil-list',
  standalone: false,
  templateUrl: './appareil-list.html',
  styleUrl: './appareil-list.css',
})
export class AppareilList {

  appareils: any[] = [
    {
      name: "App1",
      status: "Status1",
    },
    {
      name: "App2",
      status: "Status2",
    },
    {
      name: "App3",
      status: "Status3",
    }
  ];  // Would load via API in real use

}
