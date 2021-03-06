import { Component, Input, OnInit} from '@angular/core';
import {  AssignmentComponent,Todo } from '../../assignment.component';


@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  
  @Input()
  todos: Todo[];

  clicked : string;


  constructor(private assignmentComponent : AssignmentComponent) { }
 
  ngOnInit(){
 
     this.todos = this.assignmentComponent.todos;
  }
  inputClass(event){
    event.target.parentNode.className = "active";
  }

  

}
