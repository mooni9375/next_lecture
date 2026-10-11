"use client";
import { v4 as uuidv4 } from "uuid";
import TodoEditor from "@/components/TodoEditor";
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import { useEffect, useState } from "react";

export default function App() {
  // 클라이언트 컴포넌트라고 하더라도, 서버에서 렌더링 시에는 localStorage가 존재하지 않기 때문에 에러 발생
  // const [todos, setTodos] = useState<Todo[]>(() => {
  //   return JSON.parse(localStorage.getItem("todos") || "[]") as Todo[];
  // });
  // 따라서, useEffect를 사용하여 클라이언트에서만 localStorage를 사용하도록 변경
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addTodo = (title: string) => {
    setTodos((todos) => [
      ...todos,
      {
        id: uuidv4(),
        title,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };
  const updateTodo = (id: string, title: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };
  const toggleTodo = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const deleteTodo = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      window.setTimeout(() => setTodos(JSON.parse(stored)), 0);
    }
    window.setTimeout(() => setIsLoading(false), 0);
  }, []);

  // todos 상태값이 변경될 때마다 localStorage에 JSON 문자열로 변환(직렬화)하여 저장
  useEffect(() => {
    if (isLoading) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, isLoading]);

  return (
    <>
      {!isLoading && (
        <div className="todo">
          {/* 할 일 헤더 */}
          <TodoHeader />
          {/* 할 일 등록 */}
          <TodoEditor addTodo={addTodo} />
          {/* 할 일 목록 */}
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      )}
    </>
  );
}
