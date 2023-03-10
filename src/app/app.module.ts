import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { ChartService } from './services/chartService/chart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { TableInfoComponent } from './table-info/table-info.component';

@NgModule({
  declarations: [AppComponent, TableInfoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgChartsModule,
  ],
  providers: [ChartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
