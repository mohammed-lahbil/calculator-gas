import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scope1Component } from './scope1.component';

describe('Scope1Component', () => {
  let component: Scope1Component;
  let fixture: ComponentFixture<Scope1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scope1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scope1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
