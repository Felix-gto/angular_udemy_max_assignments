import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // Increment lastNumber with 1 every second
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
      console.log(this.lastNumber);
    }, 1000);
  }

  // Clear the interval and pause the emission of new events
  onPauseGame() {
    clearInterval(this.interval);
  }

}
