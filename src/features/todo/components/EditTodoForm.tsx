import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";
import { Flexbox, InputLabel, InputTextArea, InputUnderline } from "common";

export default function AddTodoForm({
  values = {},
  onSubmit,
  onChange,
  onCancel,
}: {
  values: Partial<ToDoListFeature.ITodoForm>;
  onSubmit?: () => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
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
      <Flexbox flexDirection="column" mb="1rem">
        <InputLabel htmlFor="title">Title</InputLabel>
        <InputUnderline
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChange}
        />
      </Flexbox>

      <Flexbox flexDirection="column" mb="1rem">
        <InputLabel htmlFor="description" mb="0.25rem">
          Description
        </InputLabel>
        <InputTextArea
          id="description"
          name="description"
          value={description}
          onChange={onChange}
          rows={4}
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
