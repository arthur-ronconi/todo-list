import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { v4 as uuid } from 'uuid';

type TodoState = {
  todos: Todo[];
};

const initial_state: TodoState = {
  todos: [],
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initial_state),
  withMethods((store) => ({
    addTodo(title: Todo['title']) {
      patchState(store, {
        todos: [
          {
            id: uuid(),
            title,
            completed: false,
          },
          ...store.todos(),
        ],
      });
    },
    toggleTodo(id: string) {
      patchState(store, {
        todos: store.todos().map((todo) => {
          if (todo.id == id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      });
    },
  })),
);
