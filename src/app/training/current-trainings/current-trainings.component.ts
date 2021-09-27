import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingsComponent } from '../stop-trainings.component';

@Component({
  selector: 'app-current-trainings',
  templateUrl: './current-trainings.component.html',
  styleUrls: ['./current-trainings.component.scss']
})
export class CurrentTrainingsComponent implements OnInit {

  @Output() exitTraining = new EventEmitter()
  progress = 0
  timer: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.startOrResumeCounter();
  }

  startOrResumeCounter() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5
      if (this.progress >= 100) {
        clearInterval(this.timer)
      }
    }, 1000)
  }


  stopCounter() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingsComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exitTraining.emit();
      } else {
        this.startOrResumeCounter();
      }
    })
  }
}
