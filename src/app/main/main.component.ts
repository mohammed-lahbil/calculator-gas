import { Component } from '@angular/core';
import { EmissionCalculationService } from '../services/emission-calculation.service';

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

  constructor(private emissionService: EmissionCalculationService) {}

  handleScope1Result(result: number) {
    this.scope1Result = result;
    this.calculateTotal();
  }

  handleScope2Result(result: number) {
    this.scope2Result = result;
    this.calculateTotal();
  }

  handleScope3Result(result: number) {
    this.scope3Result = result;
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalResult = this.scope1Result + this.scope2Result + this.scope3Result;
  }
}
