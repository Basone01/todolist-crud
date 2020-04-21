import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";
import { Flexbox, InputLabel } from "common";

export default function AddTodoForm({
  values = {},
  onSubmit,
  onChange,
  onCancel,
}: {
  values: Partial<ToDoListFeature.ITodoForm>;
  onSubmit?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel?: () => void;
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
      <Flexbox flexDirection="column" mb="0.5rem">
        <InputLabel htmlFor="title">Title</InputLabel>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChange}
        />
      </Flexbox>
      <Flexbox flexDirection="column" mb="0.5rem">
        <InputLabel htmlFor="description">Description</InputLabel>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={onChange}
        />
      </Flexbox>
      <Flexbox flexDirection="row" justifyContent="center" my="1rem">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Edit</button>
      </Flexbox>
    </form>
  );
}
