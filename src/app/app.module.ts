import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Scope1Component } from './scope1/scope1.component';
import { Scope2Component } from './scope2/scope2.component';
import { Scope3Component } from './scope3/scope3.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { EmissionCalculationService } from './services/emission-calculation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EmissionPieChartComponent } from './emission-pie-chart/emission-pie-chart.component';
import { EmissionVerticalChartComponent } from './emission-vertical-chart/emission-vertical-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    Scope1Component,
    Scope2Component,
    Scope3Component,
    MainComponent,
    EmissionPieChartComponent,
    EmissionVerticalChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    NgxChartsModule
  ],
  providers: [EmissionCalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
