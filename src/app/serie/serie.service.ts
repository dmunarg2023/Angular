import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './serie'; // Adjust the path as necessar

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiUrl: string = environment.baseUrl + 'series';

  constructor(private http: HttpClient) { }
  getSeries(): Observable<Serie[]> {
      return this.http.get<Serie[]>(this.apiUrl);
    }


}
