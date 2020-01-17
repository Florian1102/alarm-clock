import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.css']
})
export class SetTimerComponent implements OnInit {

  alarmTime: string
  @Output() timerEmitter = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  setTimer() {
    var hours = parseInt(this.alarmTime.split(":")[0]);
    var minutes = parseInt(this.alarmTime.split(":")[1]);
    this.timerEmitter.emit(new Date(new Date().getTime() + hours * 3600 * 1000 + minutes * 1000* 60));
  }
}
