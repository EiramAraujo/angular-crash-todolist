import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
