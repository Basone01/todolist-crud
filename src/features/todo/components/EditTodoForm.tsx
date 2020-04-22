import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";
import {
  Flexbox,
  InputLabel,
  InputTextArea,
  InputUnderline,
  Button,
  InputErrorMessage,
} from "common";
import { FormErrorsObject } from "libs/types";

export default function AddTodoForm({
  values = {},
  errors = {},
  onSubmit,
  onChange,
  onCancel,
}: {
  values: Partial<ToDoListFeature.ITodoForm>;
  errors?: FormErrorsObject<ToDoListFeature.ITodoForm>;
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
        {errors.title && <InputErrorMessage>*{errors.title}</InputErrorMessage>}
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
        {errors.description && (
          <InputErrorMessage>*{errors.description}</InputErrorMessage>
        )}
      </Flexbox>
      <Flexbox flexDirection="row" justifyContent="center" my="1rem">
        <Button mx="0.25rem" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button mx="0.25rem" primary type="submit">
          Edit
        </Button>
      </Flexbox>
    </form>
  );
}
