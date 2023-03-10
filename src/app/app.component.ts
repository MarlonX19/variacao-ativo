import { Component } from '@angular/core';
import { ChartService } from './services/chartService/chart.service';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { TableValue } from './models/table';
import { SearchResponsePayload } from './models/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] | any = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'R$',
        fill: true,
        tension: 0.1,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  errorMessage: string = '';
  finalTableValues: TableValue = [];

  displayedColumns: string[] = [
    'dayNumber',
    'date',
    'currencyValue',
    'percentVariationByDay',
    'percentVariationFromDayOne',
  ];

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.chartService.getUsers().subscribe((data: SearchResponsePayload) => {
      const {
        chart: {
          result: [values],
        },
      } = data;

      this.lineChartData.labels?.push(
        ...this.calculateDatesForChart(values?.timestamp?.slice?.(-30))
      );
      this.lineChartData.datasets[0].data.push(
        ...values?.indicators?.quote[0]?.open?.slice?.(-30)
      );

      if (
        values?.timestamp?.slice?.(-30) &&
        values?.indicators?.quote[0]?.open?.slice?.(-30)
      ) {
        this.calculateValuesForTable(
          values?.timestamp?.slice?.(-30),
          values?.indicators?.quote[0]?.open?.slice?.(-30)
        );
      } else {
        this.errorMessage = 'Oops, something went wrong!';
      }
    });
  }

  calculateDatesForChart(timestamps: number[]) {
    return timestamps.map((value) => {
      return this.calculateDateFromTimestamp(value);
    });
  }

  calculateValuesForTable(timestamps: number[], openValues: number[]) {
    const arrayWithFormattedValues: TableValue = [];

    console.log('===bbb', timestamps);
    console.log('===bbbcccc', openValues);

    timestamps.forEach((value, index) => {
      let date = this.calculateDateFromTimestamp(value);

      arrayWithFormattedValues.push({
        dayNumber: index + 1,
        date: date,
        currencyValue: openValues?.[index]?.toFixed(2).padEnd(2, '0'),
        percentVariationByDay: openValues?.[index - 1]
          ? this.calculatePercentageDifferenceByDay(openValues, index)
          : '',
        percentVariationFromDayOne: openValues?.[index - 1]
          ? this.calculatePercentageDifferenceFromDayOne(openValues, index)
          : '',
      });
    });
    this.finalTableValues = [...arrayWithFormattedValues];
  }

  calculateDateFromTimestamp(timestamp: number) {
    return new Date(timestamp * 1000).toLocaleDateString();
  }

  calculatePercentageDifferenceByDay(openValues: number[], index: number) {
    return (
      ((openValues?.[index] - openValues?.[index - 1]) /
        openValues?.[index - 1]) *
      100
    )?.toFixed(2);
  }

  calculatePercentageDifferenceFromDayOne(openValues: number[], index: number) {
    return (
      ((openValues?.[index] - openValues?.[0]) / openValues?.[0]) *
      100
    )?.toFixed(2);
  }
}
