import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  //delcarations is where your components are going to go, including the AppComponent which is done for us
  //when youc reate a new component, it has tog et added here. CLI does it for us. :)
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
  ],
  //To use a module, like the HttpModule, you'll have to add it here in 'imports'
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //For Services
  providers: [],
  //not the ui library bootstrap, lol.
  bootstrap: [AppComponent]
})
export class AppModule { }
