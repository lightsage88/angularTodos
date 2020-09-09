import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClasses(): Object{
    let classes = {
      'todo': true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo):void {
    console.log('toggle');
    todo.completed = !todo.completed;
  }

  onDelete(todo):void {
    console.log('delete');
  }
}
