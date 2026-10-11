import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList({
  todos,
  updateTodo,
  toggleTodo,
  deleteTodo,
}: {
  todos: Todo[];
  updateTodo: (id: string, title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) {
  console.log("TodoList Render");
  return (
    <ul className="todo__list">
      {/* 할 일 목록이 없을 때  */}
      {todos.length === 0 && <TodoListItemEmpty />}
      {/* 할 일 목록이 있을 때 */}
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </ul>
  );
}
