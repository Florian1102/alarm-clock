import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-alarm',
  templateUrl: './set-alarm.component.html',
  styleUrls: ['./set-alarm.component.css']
})
export class SetAlarmComponent implements OnInit {

  alarmTime: string;
  @Output() alarmEmitter = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  setAlarm() {
    var alarmDate = new Date(this.alarmTime);
    this.alarmEmitter.emit(alarmDate);
  }
}
