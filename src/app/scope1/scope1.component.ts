import { Component, EventEmitter, Output } from '@angular/core';
import { EmissionCalculationService } from '../services/emission-calculation.service';

@Component({
  selector: 'app-scope1',
  templateUrl: './scope1.component.html',
  styleUrls: ['./scope1.component.scss']
})
export class Scope1Component {
  fuelConsumption: number = 0;
  daysActive: number = 0;
  fugitiveEmissions: number = 0;
  ch4Emissions: number = 0;

  @Output() scope1Calculated = new EventEmitter<number>();

  constructor(private emissionService: EmissionCalculationService) {}

  calculate() {
    const result = this.emissionService.calculateScope1(this.fuelConsumption, this.daysActive, this.fugitiveEmissions, this.ch4Emissions);
    this.scope1Calculated.emit(result);
  }
}
