import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  currentTime: any;
  deltaCurrentTimeToAlarmTime;
  isRunning = false
  @Input() alarmTime;

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.currentTime = new Date().getTime();
      this.deltaCurrentTimeToAlarmTime = this.alarmTime - this.currentTime;

      this.days = Math.floor(this.deltaCurrentTimeToAlarmTime / (1000 * 60 * 60 * 24)) || 0;
      this.hours = Math.floor((this.deltaCurrentTimeToAlarmTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0;
      this.minutes = Math.floor((this.deltaCurrentTimeToAlarmTime % (1000 * 60 * 60)) / (1000 * 60)) || 0;
      this.seconds = Math.floor((this.deltaCurrentTimeToAlarmTime % (1000 * 60)) / 1000) || 0;

      if (new Date(this.deltaCurrentTimeToAlarmTime).getTime() < 0 && this.isRunning) {
        alert("Zeit ist abgelaufen");
        this.isRunning = false;
      };

    }, 1000);
  }

  ngOnChanges(changes): void {
    this.isRunning = true;
  }

}
