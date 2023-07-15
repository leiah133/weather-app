import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WheatherDatas } from 'src/app/models/interfaces/Wheather';

@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
  styleUrls: []
})
export class WheaterCardComponent  {
  @Input() wheaterDatasInput!: WheatherDatas;

minTemperatureIcon =faTemperatureLow;
maxTemperatureIcon =faTemperatureHigh;
humidityIcon = faDroplet;
windIcon = faWind;

}
