import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { verticalChart } from 'src/data';

@Component({
  selector: 'app-emission-vertical-chart',
  templateUrl: './emission-vertical-chart.component.html',
  styleUrls: ['./emission-vertical-chart.component.scss']
})
export class EmissionVerticalChartComponent {
  @Input() verticalChart = verticalChart;

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Emission';
  showYAxisLabel = true;
  yAxisLabel = 'Tonnes en CO2';

  colorScheme: Color = {
    name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['grey']
  };

  constructor() {
    Object.assign(this, { verticalChart })
  }

  onSelect(event: any) {
    console.log(event);
  }
}
