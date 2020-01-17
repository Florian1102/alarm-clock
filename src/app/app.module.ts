import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { SetAlarmComponent } from './set-alarm/set-alarm.component';
import { SetTimerComponent } from './set-timer/set-timer.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTimeComponent,
    SetAlarmComponent,
    SetTimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
