import create from "zustand";
// create an array of todos
interface Todo {
  id: number;
  text: string;
}

// creacte an interface for the store
interface TodoState {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, text: string) => text;
}
// creating the store
const useStore = create<TodoStore>((set) => ({
  todos: [],
  newTodo: "",
  // add a todo to the store
  addTodo: () =>
    set((state) => ({
      ...state,
      todos: [
        ...state.todos,
        { id: state.todos.length + 1, text: state.newTodo },
      ],
      newTodo: "",
    })),
  // set a new todo
  setNewTodo: (text: string) =>
    set((state) => ({
      ...state,
      newTodo: text,
    })),
  // delete a todo
  deleteTodo: (id: number) =>
    set((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  // edit todo
  editTodo: (id: number, text: string) =>
    set((state) => ({
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      }),
    })),
}));
export default useStore;
