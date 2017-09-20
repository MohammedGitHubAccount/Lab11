import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result = 0;

  updateOuter(event) {
    this.result = event;
  }

  onKeyUp() {

  }
}
