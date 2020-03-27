import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        id:1,
        title:'test',
        completed:false
      }
    ]
  }

}
