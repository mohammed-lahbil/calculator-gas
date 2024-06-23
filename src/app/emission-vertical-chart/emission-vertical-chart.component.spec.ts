import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissionVerticalChartComponent } from './emission-vertical-chart.component';

describe('EmissionVerticalChartComponent', () => {
  let component: EmissionVerticalChartComponent;
  let fixture: ComponentFixture<EmissionVerticalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmissionVerticalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmissionVerticalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
