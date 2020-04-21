import React from "react";
import { ToDoListFeature } from "../types";

export default function TodoListItem({
  todo,
}: {
  todo: ToDoListFeature.ITodo;
}) {
  const { title, description } = todo;
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
