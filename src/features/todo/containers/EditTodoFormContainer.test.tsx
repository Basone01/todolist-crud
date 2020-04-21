import { render, fireEvent, wait } from "@testing-library/react";
import React from "react";
import AddTodoFormContainer from "./AddTodoFormContainer";

test("render form with corrected submitted values", async () => {
  const onSubmit = jest.fn();

  const { getByLabelText, getByText } = render(
    <AddTodoFormContainer onSubmit={onSubmit} />
  );

  // input form value

  const titleInput = getByLabelText(/title/i);
  await wait(() => {
    fireEvent.change(titleInput, {
      target: {
        value: "sample title",
      },
    });
  });

  expect(titleInput).toHaveValue("sample title");

  const descriptionInput = getByLabelText(/description/i);
  await wait(() => {
    fireEvent.change(descriptionInput, {
      target: {
        value: "sample description",
      },
    });
  });
  expect(descriptionInput).toHaveValue("sample description");

  const submitButton = getByText(/add/i);

  // submit form

  await wait(() => {
    fireEvent.click(submitButton);
  });

  const submittedValues = onSubmit.mock.calls[0][0];
  const formActions = onSubmit.mock.calls[0][1];

  expect(submittedValues).toEqual({
    description: "sample description",
    title: "sample title",
  });

  // reset form after submit

  await wait(() => {
    formActions.resetForm();
  });

  expect(titleInput).toHaveValue("");
  expect(descriptionInput).toHaveValue("");
});
