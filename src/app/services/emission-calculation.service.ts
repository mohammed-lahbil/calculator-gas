import { Injectable } from '@angular/core';
import { verticalChart } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class EmissionCalculationService {
  private emissionFactors = {
    fuel: 0.24,
    electricity: 0.712,
    chemicals: {
      chlorureFerrique: 322,
      polymere: 805,
      hypochloriteSodium: 372,
      chlore: 740
    },
    gwp: {
      fugitive: 1430,
      fe: 0.18,
      ch4: 25
    },
    camions: {
      camionBenneBasculante: { consumption: 0.34, emissionFactor: 2.518},
      camionCiterne: { consumption: 0.33, emissionFactor: 2.518}
    } as { [key: string]: { consumption: number; emissionFactor: number } },
    cars: {
      daciaSandero: { consumption: 0.052, emissionFactor: 2.518 },
      daciaLogan: { consumption: 0.038, emissionFactor: 2.518 },
      renaultKangoo: { consumption: 0.0575, emissionFactor: 2.518 },
      peugeot208: { consumption: 0.044, emissionFactor: 2.518 },
      renaultClio: { consumption: 0.044, emissionFactor: 2.518 }
    } as { [key: string]: { consumption: number; emissionFactor: number } }
  };

  constructor() { }

  calculateScope1(fuelConsumption: number, daysActive: number, fugitiveEmissions: number, ch4Emissions: number): number {
    const { fuel, gwp } = this.emissionFactors;
    const fuelEmissions = fuelConsumption * fuel / 1000;
    verticalChart.push({
      "name": "Consommation de fioul",
      "value": fuelEmissions
    })
    const fugitiveEmissionsTotal = fugitiveEmissions * gwp.fugitive / 1000;
    verticalChart.push({
      "name": "Emissions fugitives",
      "value": fugitiveEmissionsTotal
    })
    const ch4EmissionsTotal = ch4Emissions * gwp.fe * gwp.ch4 / 1000;
    verticalChart.push({
      "name": "Emission de CH4",
      "value": ch4EmissionsTotal
    })
    return fuelEmissions + fugitiveEmissionsTotal + ch4EmissionsTotal;
  }

  calculateScope2(electricityConsumption: number): number {
    const { electricity } = this.emissionFactors;
    const result = electricityConsumption * electricity / 1000;
    verticalChart.push({
      "name": "Consommation annuelle d'électricité",
      "value": result
    })

    console.log(verticalChart)
    return result;
  }

  calculateScope3(
    transportDistance: number, boueCamionType: string, transportDays: number,
    chemicalQuantities: { chlorureFerrique: number, polymere: number, hypochloriteSodium: number, chlore: number },
    chimicalData: {chimicalProduct: string, distance: number, days: number, camionType: string}[],
    commuteData: { people: number, distance: number, days: number, carType: string }[]
  ): number {
    const { chemicals, cars, camions } = this.emissionFactors;
    const fuelConsumptionTransport = camions[boueCamionType];

    let totalEmissions = 0;

    totalEmissions += transportDistance * transportDays * fuelConsumptionTransport.consumption * fuelConsumptionTransport.emissionFactor / 1000;

    verticalChart.push({
      "name": "Transport des boues",
      "value": transportDistance * transportDays * fuelConsumptionTransport.consumption * fuelConsumptionTransport.emissionFactor / 1000
    })

    let chimicals = 0;
    totalEmissions += chemicalQuantities.chlorureFerrique * chemicals.chlorureFerrique / 1000000;
    totalEmissions += chemicalQuantities.polymere * chemicals.polymere / 1000000;
    totalEmissions += chemicalQuantities.hypochloriteSodium * chemicals.hypochloriteSodium / 1000000;
    totalEmissions += chemicalQuantities.chlore * chemicals.chlore / 1000000;
    
    chimicals += chemicalQuantities.chlorureFerrique * chemicals.chlorureFerrique / 1000000;
    chimicals += chemicalQuantities.polymere * chemicals.polymere / 1000000;
    chimicals += chemicalQuantities.hypochloriteSodium * chemicals.hypochloriteSodium / 1000000;
    chimicals += chemicalQuantities.chlore * chemicals.chlore / 1000000;

    verticalChart.push({
      "name": "Production des produits chimiques",
      "value": chimicals
    })

    let chemicalTransport = 0;
    chimicalData.forEach(data => {
      const camion = camions[data.camionType];
      if (camion) {
        totalEmissions += data.distance * data.days * camion.consumption * camion.emissionFactor / 1000;
        chemicalTransport += data.distance * data.days * camion.consumption * camion.emissionFactor / 1000;
      }
    });

    verticalChart.push({
      "name": "Transport des produits chimiques",
      "value": chemicalTransport
    })

    let transportation = 0;

    commuteData.forEach(data => {
      const car = cars[data.carType];
      if (car) {
        totalEmissions += data.people * data.distance * data.days * car.consumption * car.emissionFactor / 1000;
        transportation += data.people * data.distance * data.days * car.consumption * car.emissionFactor / 1000;
      }
    });

    verticalChart.push({
      "name": "Transport domicile-travail",
      "value": transportation
    })

    return totalEmissions;
  }
}
