import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherModel } from 'src/interfaces/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather(cityName:string):Observable<WeatherModel>{
    return this.http.get<WeatherModel>('https://open-weather13.p.rapidapi.com/city/'+cityName,{
      headers: {
        'X-RapidAPI-Key': '15d5fcefb1msh060bbfd9052fa64p1e6f2fjsn6fcbdfbdca11',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    })
  }
}
