import { Component, Input, OnChanges } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { pie } from 'src/data';

@Component({
  selector: 'app-emission-pie-chart',
  templateUrl: './emission-pie-chart.component.html',
  styleUrls: ['./emission-pie-chart.component.scss']
})

export class EmissionPieChartComponent implements OnChanges {
  @Input() chartData: any[] = [];
  single!: any[];
  view: [number, number] = [700, 400];

  @Input() pieChart = pie;

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() {
    Object.assign(this, { pie });
  }

  ngOnChanges() {
    // Handle changes if necessary
  }

  onSelect(event: any): void {
    console.log('Item clicked');
  }

  onActivate(event: any): void {
    console.log('Activate');
  }

  onDeactivate(event: any): void {
    console.log('Deactivate');
  }
}

