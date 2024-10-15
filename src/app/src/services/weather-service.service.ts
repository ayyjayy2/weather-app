import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private httpClient: HttpClient) { }

  getWeather() : Observable<any>{
    //https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
    return this.httpClient.get<any>("https://api.openweathermap.org/data/2.5/weather?q=durham,nc,us&appid=23e343a007f35ccbcc1a03ea2f52eff9"); //openweather url goes here with the city name and api key
  }
}
