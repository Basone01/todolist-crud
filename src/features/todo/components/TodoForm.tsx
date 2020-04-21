import React, { useCallback } from "react";
import { useFormikContext, useField } from "formik";

export default function TodoForm() {
  const { submitForm } = useFormikContext();

  const [titleField] = useField("title");
  const [descriptionField] = useField("description");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      submitForm();
    },
    [submitForm]
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>NEW TASK</h3>

      <label htmlFor="title">Title</label>
      <input type="text" id="title" {...titleField} />

      <label htmlFor="description">Description</label>
      <input type="text" id="description" {...descriptionField} />

      <button type="submit">Add</button>
    </form>
  );
}
