import { Component } from '@angular/core';

import { Data } from '../interfaces/data';

import { LoaderService } from '../providers/loader.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent {

  public data: Data[] = [];

  constructor(private dataProvider: LoaderService) {}

  ngOnInit() {
    this.dataProvider.getRespose().subscribe((response) => {
      this.data = (response as Data[]);
    })
  }
}
