import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  //now we need to make a model of what a Todo is. -> ../../models/Todo
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(todo:Todo) {
    console.log('addme', todo);
    this.todoService.addTodo(todo).subscribe(data => {
      this.todos.push(data)
    })
  }

  deleteTodo(todo:Todo) {
    console.log('deleteme', todo);
    //remove todo from the UI with filter
    this.todos = this.todos.filter(t => {
      return t.id != todo.id
    })
    //remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }
}
