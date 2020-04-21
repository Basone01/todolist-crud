import { render } from "@testing-library/react";
import React from "react";
import TodoForm from "./TodoForm";
import { Formik } from "formik";

describe("TodoForm", () => {
  it("render all input values", () => {
    const initialValue = {
      title: "title",
      description: "description",
    };
    const { getByLabelText, getByText } = render(
      <Formik initialValues={initialValue} onSubmit={console.log}>
        <TodoForm />
      </Formik>
    );

    const titleInput = getByLabelText(/title/i);
    expect(titleInput).toHaveValue(initialValue.title);

    const descriptionInput = getByLabelText(/description/i);
    expect(descriptionInput).toHaveValue(initialValue.description);

    const addButton = getByText(/add/i);
  });
});
