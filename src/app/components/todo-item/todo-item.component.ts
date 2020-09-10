import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  //output  parent'smethod returns eEmitter<todotype> = equals a new eventemitter
  //deleteTodoQ will be (<event>) in todos.component.html
  @Output() deleteTodoQ: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

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
    //we also want to update the server
    this.todoService.toggleCompleted(todo).subscribe(data => {
      console.log(data);
    });
  }

  onDelete(todo):void {
    console.log('delete');
    //we need to emit an event upwards
      //we will bring in EventEmitter and Output
      //We are emitting something out to the parent component...look up at @Output()...
      //we are emitting something to the parent Component and the parent component's method of deleteTodo
    this.deleteTodoQ.emit(todo)
  }
}
