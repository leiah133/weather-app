import { WheatherDatas } from 'src/app/models/interfaces/Wheather';
import { WheatherService } from './../../service/wheather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject;

initialCityName ='Brasília';
wheatherDatas!: WheatherDatas;
searchIcon = faMagnifyingGlass;


  constructor(private wheatherService: WheatherService ) { }

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  getWheatherDatas(cityName: string): void{
    this.wheatherService.getWheaterData(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) =>{
        response && (this.wheatherDatas = response);
        console.log(this.wheatherDatas);
      },

      error: (error) =>{
        console.log("error");
      }
    })
  }
  onSubmit():void{
    this.getWheatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

 ngOnDestroy(): void {
     this.destroy$.next();
     this.destroy$.complete();

 }

}
