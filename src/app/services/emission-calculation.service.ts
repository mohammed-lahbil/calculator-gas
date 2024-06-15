import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmissionCalculationService {
  private emissionFactors = {
    fuel: 0.24,
    electricity: 0.712,
    transport: {
      general: 2.518,
      truck: {
        tanker: 33,
        dumper: 34
      }
    },
    chemicals: {
      chlorureFerrique: 322,
      polymere: 805,
      hypochloriteSodium: 372,
      chlore: 740
    },
    gwp: {
      fugitive: 1.43,
      ch4: 25
    },
    cars: {
      daciaSandero: { consumption: 0.12, emissionFactor: 2.518 },
      daciaLogan: { consumption: 0.13, emissionFactor: 2.518 },
      renaultKangoo: { consumption: 0.14, emissionFactor: 2.518 },
      peugeot208: { consumption: 0.11, emissionFactor: 2.518 },
      renaultClio: { consumption: 0.10, emissionFactor: 2.518 }
    } as { [key: string]: { consumption: number; emissionFactor: number } }
  };

  constructor() { }

  calculateScope1(fuelConsumption: number, daysActive: number, fugitiveEmissions: number, ch4Emissions: number): number {
    const { fuel, gwp } = this.emissionFactors;
    const fuelEmissions = fuelConsumption * fuel / 1_000;
    const fugitiveEmissionsTotal = fugitiveEmissions * gwp.fugitive / 1_000;
    const ch4EmissionsTotal = ch4Emissions * gwp.ch4 / 1_000;
    return fuelEmissions + fugitiveEmissionsTotal + ch4EmissionsTotal;
  }

  calculateScope2(electricityConsumption: number): number {
    const { electricity } = this.emissionFactors;
    return electricityConsumption * electricity / 1_000;
  }

  calculateScope3(
    transportDistance: number, transportDays: number,
    chemicalQuantities: { chlorureFerrique: number, polymere: number, hypochloriteSodium: number, chlore: number },
    commuteData: { people: number, distance: number, days: number, carType: string }[]
  ): number {
    const { transport, chemicals, cars } = this.emissionFactors;
    const fuelConsumptionTransport = transport.truck.dumper; // Assuming usage of camion à benne basculante

    let totalEmissions = 0;

    totalEmissions += transportDistance * transportDays * fuelConsumptionTransport * transport.general / 1_000;

    totalEmissions += chemicalQuantities.chlorureFerrique * chemicals.chlorureFerrique / 1_000_000;
    totalEmissions += chemicalQuantities.polymere * chemicals.polymere / 1_000_000;
    totalEmissions += chemicalQuantities.hypochloriteSodium * chemicals.hypochloriteSodium / 1_000_000;
    totalEmissions += chemicalQuantities.chlore * chemicals.chlore / 1_000_000;

    commuteData.forEach(data => {
      const car = cars[data.carType];
      if (car) {
        totalEmissions += data.people * data.distance * data.days * car.consumption * car.emissionFactor / 1_000;
      }
    });

    return totalEmissions;
  }
}
