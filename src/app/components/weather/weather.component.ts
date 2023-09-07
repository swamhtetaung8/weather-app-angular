import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherModel } from 'src/interfaces/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName:string = "Oslo";
  weatherInfo!:WeatherModel;

  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getWeatherInfo()
  }

  onSubmit():void{
    this.getWeatherInfo()
  }

  toCelsius(degree:number){
    return Math.round(5/9*(degree - 32));
  }

  private getWeatherInfo(){
    this.weatherService.getWeather(this.cityName).subscribe(result=>{
      this.weatherInfo = result
      console.log(this.weatherInfo)
    })
  }

}
