import { Component, Input } from '@angular/core';
import { Appareil } from '../../core/models/appareil.model';

@Component({
  selector: 'app-appareil-item',
  standalone: false,
  templateUrl: './appareil-item.html',
  styleUrl: './appareil-item.css',
})
export class AppareilItem {

  // Parent → Child data sharing: @Input for receiving object from parent
  @Input() appareil!: Appareil;

  // Parent → Child data sharing: @Input for receiving simple string from parent
  @Input() messageFromParent: string = '';

}
