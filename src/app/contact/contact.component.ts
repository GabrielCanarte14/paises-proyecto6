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

	constructor(private dataProvider: LoaderService) { }

	ngOnInit() {
		this.dataProvider.getRespose().subscribe((response) => {
			this.data = response as Data[];
			this.generateCharts();
		});
	}

	generateCharts() {
		const firstFiveData = this.data.slice(21, 31);
		const countryarea = this.data.slice(10, 20);
		this.chartOptions = {
			animationEnabled: true,
			theme: "dark2",
			exportEnabled: true,
			responsive: true,

			data: [{
				type: "pie",
				indexLabel: "{name}: {y}%",
				dataPoints: firstFiveData.map(countryData => ({ name: countryData.country, y: countryData.worldPercentage })),
			}]
		};

		this.chartOptions2 = {
			animationEnabled: true,
			theme: "dark2",
			exportEnabled: true,
			responsive: true,
			data: [{
				type: "column",
				indexLabel: "{y}",
				dataPoints: countryarea.map(countryData => ({ label: countryData.country, y: countryData.landAreaKm })),
			}]
		};
	}
}


