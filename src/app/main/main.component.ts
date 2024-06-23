import { Component } from '@angular/core';
import { EmissionCalculationService } from '../services/emission-calculation.service';
import { verticalChart } from 'src/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  scope1Result: number = 0;
  scope2Result: number = 0;
  scope3Result: number = 0;
  totalResult: number = 0;
  chartData: any[] = [];
  showChart = false;
  verticalData: any;
  scope1Calculated = false;
  scope2Calculated = false;
  scope3Calculated = false;

  constructor(private emissionService: EmissionCalculationService) {}

  handleScope1Result(result: number) {
    this.scope1Result = result;
    this.scope1Calculated = true;
    this.calculateTotal();
  }

  handleScope2Result(result: number) {
    this.scope2Result = result;
    this.scope2Calculated = true;
    this.calculateTotal();
    
  }

  handleScope3Result(result: number) {
    this.scope3Result = result;
    this.scope3Calculated = true;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalResult = this.scope1Result + this.scope2Result + this.scope3Result;
    this.chartData = [
      { name: 'Scope 1', value: this.scope1Result },
      { name: 'Scope 2', value: this.scope2Result },
      { name: 'Scope 3', value: this.scope3Result }
    ];
    this.showChart = true;

    if(this.scope1Calculated && this.scope2Calculated && this.scope3Calculated) this.verticalData = verticalChart;
    
  }
}
