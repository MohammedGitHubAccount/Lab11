import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  counterValue = 0;

  @Output()
  counterChange = new EventEmitter();

  // @Input()
  // counterInput;

  constructor() { }

  increment() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }
}
