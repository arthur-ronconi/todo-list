import { Component, inject } from '@angular/core';
import { Input } from '../input/input';
import { TodoStore } from '../../store/todos.store';

@Component({
  selector: 'app-todo-list',
  imports: [Input],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  store = inject(TodoStore);

  text = '';
  onInputHandler(event: Event) {
    this.text = (event.target as HTMLInputElement).value;
    console.log(this.text);
  }

  submitTodo(title: string) {
    this.store.addTodo(title);
  }
}
