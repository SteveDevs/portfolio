import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Chart } from 'chart.js';
import { GlobalPortfolioStatsService } from './global-portfolio-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chart: any = [];
  isLoading: boolean;

  constructor(private _glportfolio: GlobalPortfolioStatsService) { }

  ngOnInit() {

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['2018','2019','2020','2021','2022','2023'],
        datasets: [{
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Portfolio 1",
            borderColor: "#3e95cd",
            fill: false
          }, {
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Portfolio 2",
            borderColor: "#8e5ea2",
            fill: false
          }, {
            data: [168,170,178,190,203,276,408,547,675,734],
            label: "Portfolio 3",
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: [134,145,122,199,189,275,308,447,575,634],
            label: "Portfolio 4",
            borderColor: "#2c79f4",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Popularity comparison'
        }
      }
    });


    this.chart = new Chart('canvas_pie', {
      type: 'pie',
    data: {
      labels: ["Stat1", "Stat2", "Stat3", "Stat4", "Stat5"],
      datasets: [{
        label: "Stat label",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Aditional Portfolio Statistics'
      }
    }
    });
  }
}
