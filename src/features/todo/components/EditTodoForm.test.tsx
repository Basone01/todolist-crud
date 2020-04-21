import { render } from "@testing-library/react";
import React from "react";
import EditTodoForm from "./EditTodoForm";

describe("EditTodoForm", () => {
  it("render all input values", () => {
    const initialValue = {
      title: "title",
      description: "description",
    };
    const { getByLabelText, getByText } = render(
      <EditTodoForm values={initialValue} onChange={() => {}} />
    );

    const titleInput = getByLabelText(/title/i);
    expect(titleInput).toHaveValue(initialValue.title);

    const descriptionInput = getByLabelText(/description/i);
    expect(descriptionInput).toHaveValue(initialValue.description);

    const editButton = getByText(/edit/i);
    const cancelButton = getByText(/cancel/i);
  });
});
