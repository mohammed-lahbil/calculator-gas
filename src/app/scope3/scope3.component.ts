import { Component, EventEmitter, Output } from '@angular/core';
import { EmissionCalculationService } from '../services/emission-calculation.service';

@Component({
  selector: 'app-scope3',
  templateUrl: './scope3.component.html',
  styleUrls: ['./scope3.component.scss']
})
export class Scope3Component {
  show: boolean = false;
  transportDistance: number = 0;
  transportDays: number = 0;
  boueCamionType: string = '';
  
  chlorureFerrique: number = 0;
  polymere: number = 0;
  hypochloriteSodium: number = 0;
  chlore: number = 0;
  
  commuteCamionType: string = '';
  chimicalProduct: string = '';
  chimicalData: {chimicalProduct: string, distance: number, days: number, camionType: string}[] = [];
  commuteChimicalDays: any;
  commuteChimicalDistance: any;
  
  commuteData: { people: number, distance: number, days: number, carType: string }[] = [];
  commutePeople: number = 0;
  commuteDistance: number = 0;
  commuteDays: number = 0;
  commuteCarType: string = '';
  
  @Output() scope3Calculated = new EventEmitter<number>();
  
  constructor(private emissionService: EmissionCalculationService) {}
  
  addCommuteData() {
    this.commuteData.push({ people: this.commutePeople, distance: this.commuteDistance, days: this.commuteDays, carType: this.commuteCarType });
    this.resetCommuteForm();
  }

  addChimicalProduct() {
    this.chimicalData.push({ chimicalProduct: this.chimicalProduct, distance: this.commuteChimicalDistance, days: this.commuteChimicalDays, camionType: this.commuteCamionType });
    this.resetChimicalProductForm();
  }

  resetCommuteForm() {
    this.commutePeople = 0;
    this.commuteDistance = 0;
    this.commuteDays = 0;
    this.commuteCarType = '';
  }

  resetChimicalProductForm() {
    this.chimicalProduct = '';
    this.commuteChimicalDistance = 0;
    this.commuteChimicalDays = 0;
    this.commuteCamionType = '';
  }

  calculate() {
    const chemicalQuantities = {
      chlorureFerrique: this.chlorureFerrique,
      polymere: this.polymere,
      hypochloriteSodium: this.hypochloriteSodium,
      chlore: this.chlore
    };

    const result = this.emissionService.calculateScope3(this.transportDistance, this.boueCamionType, this.transportDays, chemicalQuantities, this.chimicalData, this.commuteData);
    this.scope3Calculated.emit(result);
  }
}
