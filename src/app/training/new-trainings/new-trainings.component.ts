import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-trainings',
  templateUrl: './new-trainings.component.html',
  styleUrls: ['./new-trainings.component.scss']
})
export class NewTrainingsComponent implements OnInit {

  @Output() startTraining = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onStartTraining() {
    this.startTraining.emit();
  }

}
