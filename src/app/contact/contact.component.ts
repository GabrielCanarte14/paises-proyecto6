import { Component } from '@angular/core';

import { Data } from '../interfaces/data';

import { LoaderService } from '../providers/loader.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
	public data: Data[] = [];
	chartOptions = {};
	chartOptions2 = {};
	
	constructor(private dataProvider: LoaderService) {}
  
	ngOnInit() {
		this.dataProvider.getRespose().subscribe((response) => {
			this.data = response as Data[];
			this.generateCharts();
		  });
		}
	  
	generateCharts() {
		const firstFiveData = this.data.slice(0, 5);
		this.chartOptions = {
			title:{
				text: "Porcentaje de aumento en la población mundial"
			},
			data: [{
			  type: "column",
			  dataPoints: firstFiveData.map(countryData => ({ x: countryData.country, y: countryData.worldPercentage })),
			}]
		  };
	  
		this.chartOptions2 = {
			title:{
				text: "Tasa de crecimiento"
			},
			data: [{
			  type: "pie",
			  dataPoints: firstFiveData.map(countryData => ({ name: countryData.country, y: countryData.growthRate })),
			}]
		  };
		}
	}
/*	public data: Data[] = [];

	constructor(private dataProvider: LoaderService) {}
  
	ngOnInit() {
	  this.dataProvider.getRespose().subscribe((response) => {
		this.data = (response as Data[]);
	  })
	}*/

