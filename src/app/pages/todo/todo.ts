import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { TodoList } from '../../components/todo-list/todo-list';

@Component({
  selector: 'app-todo',
  imports: [Header, Footer, TodoList],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {}
