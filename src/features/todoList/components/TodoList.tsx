import React from "react";
import { ToDoListFeature } from "../types";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
}: {
  todos: ToDoListFeature.ITodo[];
}) {
  return (
    <div data-testid="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
}
