import { Component, EventEmitter, Output } from '@angular/core';
import { EmissionCalculationService } from '../services/emission-calculation.service';

@Component({
  selector: 'app-scope2',
  templateUrl: './scope2.component.html',
  styleUrls: ['./scope2.component.scss']
})
export class Scope2Component {
  electricityConsumption: number = 0;

  @Output() scope2Calculated = new EventEmitter<number>();

  constructor(private emissionService: EmissionCalculationService) {}

  calculate() {
    const result = this.emissionService.calculateScope2(this.electricityConsumption);
    this.scope2Calculated.emit(result);
  }
}
