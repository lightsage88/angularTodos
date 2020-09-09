import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = "http://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
    // return [
    //     {
    //       id: 1,
    //       title: "Smoke crack cocaine",
    //       completed: true
    //     },
    //     {
    //       id: 2,
    //       title: "Eat mushrooms",
    //       completed: true
    //     },
    //     {
    //       id: 3,
    //       title: "Watch TV",
    //       completed: false
    //     }
    //   ]
  }
}
