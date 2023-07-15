import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  private apiKey = '37c92aac75ca9e67251f05737d88c9cb';
  private readonly urlApi = 'https://api.openweathermap.org/data/2.5/weather?'


  constructor(private http: HttpClient) { }

  getWheaterData(cityName: string): Observable<any> {
    return this.http.get(
      `${this.urlApi}q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
    );
  }
}


