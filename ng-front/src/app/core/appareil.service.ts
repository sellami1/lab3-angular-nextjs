import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appareil } from './models/appareil.model';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {

  private apiUrl = 'http://192.168.50.100/api/appareils';  // Backend API base URL (from Express + MongoDB)

  constructor(private http: HttpClient) { }

  // API call: GET all devices (Observable for async handling)
  getAll(): Observable<Appareil[]> {
    return this.http.get<Appareil[]>(this.apiUrl);
  }

  // API call: GET one device by ID (used with route params)
  getOne(id: string): Observable<Appareil> {
    return this.http.get<Appareil>(`${this.apiUrl}/${id}`);
  }

  // API call: PUT to switch all on (global toggle)
  switchOnAll() { return this.http.put(`${this.apiUrl}/all/on`, {}); }

  // API call: PUT to switch all off (global toggle)
  switchOffAll() { return this.http.put(`${this.apiUrl}/all/off`, {}); }

  // API call: PUT to switch one device (per-item toggle)
  switchOne(id: string, status: string) {
    return this.http.put(`${this.apiUrl}/${id}`, { status });
  }

}
