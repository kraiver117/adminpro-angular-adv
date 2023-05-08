import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { GraphBarComponent } from './graph-bar/graph-bar.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [CounterComponent, GraphBarComponent],
  exports: [CounterComponent, GraphBarComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
