import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  @Output()
  inputChanged = new EventEmitter<string>();

  description: string;


  onInput(description: string) {
    this.description = description;
  }

}
