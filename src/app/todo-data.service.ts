import {Injectable} from '@angular/core';
import {Todo} from './todo';


@Injectable()
export class TodoDataService {
  lastId = 0;
  todos: Todo[] = [];


  constructor() {

  }

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.keepInLocalStorage(todo);
    return this;
  }

  deleteTodoById(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}) {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getAllTodosFromLocalStorage(): Todo[] {
    let todosFromLocalStorage: Todo[];
    for (let todo of this.todos) {
      todosFromLocalStorage.push(this.getFromLocalStorage(todo.id));
    }
    return todosFromLocalStorage;
  }

  getTodoById(id: number) {
    return this.todos.filter(todo => todo.id === id);
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  keepInLocalStorage(todo: Todo) {
    localStorage.setItem(todo.id.toString(), JSON.stringify(todo));
  }

  getFromLocalStorage(id: number): Todo {
    return JSON.parse(localStorage.getItem(id.toString()));
  }
}
