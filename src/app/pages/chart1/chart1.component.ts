import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styles: [],
})
export class Chart1Component {
  public barChartData1: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Ventas Coppel',
        backgroundColor: '#F4CDCD',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Ventas Walmart',
        backgroundColor: '#D6E0FF',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Ventas Oxxo',
        backgroundColor: '#D2E9CF',
      },
    ],
  };

  public barChartData2: ChartData<'bar'> = {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: '#D1D1D1',
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: '#ECF5C6',
      },
      {
        data: [100, 20, 42, 13, 78, 30, 78],
        label: 'Series C',
        backgroundColor: '#D4C6AB',
      },
    ],
  };
}
