import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-current-trainings',
  templateUrl: './current-trainings.component.html',
  styleUrls: ['./current-trainings.component.scss']
})
export class CurrentTrainingsComponent implements OnInit {

  progress = 0
  timer: any;
  constructor() { }

  ngOnInit(): void {
    this.startCount();
  }

  startCount() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5
      if (this.progress >= 10) {
        clearInterval(this.timer)
      }
    }, 1000)
  }

  stopCounter() {
    clearInterval(this.timer);
  }
}
