import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/app/services/covid-api.service';

@Component({
  selector: 'app-stats-count',
  templateUrl: './stats-count.component.html',
  styleUrls: ['./stats-count.component.scss']
})
export class StatsCountComponent implements OnInit {

  public stats: any

  constructor(private covapi: CovidApiService) { }


  ngOnInit() {
    this.covapi.getWorld().subscribe(data =>
      // console.log(data)
      this.stats = data
    )
  }


}
