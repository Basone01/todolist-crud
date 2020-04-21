import { render } from "@testing-library/react";
import React from "react";
import AddTodoForm from "./AddTodoForm";

describe("AddTodoForm", () => {
  it("render all input values", () => {
    const initialValue = {
      title: "title",
      description: "description",
    };
    const { getByLabelText, getByText } = render(
      <AddTodoForm values={initialValue} onChange={() => {}} />
    );

    const titleInput = getByLabelText(/title/i);
    expect(titleInput).toHaveValue(initialValue.title);

    const descriptionInput = getByLabelText(/description/i);
    expect(descriptionInput).toHaveValue(initialValue.description);

    const addButton = getByText(/add/i);
    const cancelButton = getByText(/cancel/i);
  });
});
