import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Scope1Component } from './scope1/scope1.component';
import { Scope2Component } from './scope2/scope2.component';
import { Scope3Component } from './scope3/scope3.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmissionCalculationService } from './services/emission-calculation.service';

@NgModule({
  declarations: [
    AppComponent,
    Scope1Component,
    Scope2Component,
    Scope3Component,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmissionCalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
