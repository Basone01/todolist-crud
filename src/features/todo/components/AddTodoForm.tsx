import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";

export default function AddTodoForm({
  values = {},
  onSubmit,
  onChange,
}: {
  values: Partial<ToDoListFeature.ITodoForm>;
  onSubmit?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const { title = "", description = "" } = values;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit && onSubmit();
    },
    [onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={onChange}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={onChange}
      />

      <button type="submit">Add</button>
    </form>
  );
}
