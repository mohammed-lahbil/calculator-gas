import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionPieChartComponent } from './emission-pie-chart.component';

describe('EmissionPieChartComponent', () => {
  let component: EmissionPieChartComponent;
  let fixture: ComponentFixture<EmissionPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissionPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
