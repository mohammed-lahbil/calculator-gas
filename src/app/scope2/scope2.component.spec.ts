import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scope2Component } from './scope2.component';

describe('Scope2Component', () => {
  let component: Scope2Component;
  let fixture: ComponentFixture<Scope2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scope2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scope2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
