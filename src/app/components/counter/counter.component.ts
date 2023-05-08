import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
})
export class CounterComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // * rename the input property
  // @Input('newName') progress = 30;
  @Input() progress = 30;
  @Input() btnClass: string = 'btn-primary';
  @Output() changeValueEvent: EventEmitter<number> = new EventEmitter();

  // get getPercentage(): string {
  //   return `${this.progress}%`;
  // }

  changeValue(value: number): void {
    if (this.progress >= 100 && value > 0) {
      this.changeValueEvent.emit(100);
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.changeValueEvent.emit(0);
      this.progress = 0;
      return;
    }

    this.progress += value;
    this.changeValueEvent.emit(this.progress);
  }

  onChange(value: number) {
    if (value > 100) {
      this.progress = 100;
    } else if (value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.changeValueEvent.emit(this.progress);
  }
}
