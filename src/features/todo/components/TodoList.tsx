import React from "react";
import { ToDoListFeature } from "../types";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  todos,
  onRemove,
  onEdit,
}: {
  todos: ToDoListFeature.ITodo[];
  onRemove?: (_id: string) => void;
  onEdit?: (_id: string) => void;
}) {
  if (todos.length === 0) {
    return <p>Empty press 'Create' for add new todo</p>;
  }
  return (
    <div data-testid="todo-list">
      {todos.map((todo) => (
        <TodoListItem
          key={todo._id}
          todo={todo}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
