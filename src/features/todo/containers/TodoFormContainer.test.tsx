import { render, fireEvent, wait } from "@testing-library/react";
import React from "react";
import TodoFormContainer from "./TodoFormContainer";

test("render form with corrected submitted values", async () => {
  const onSubmit = jest.fn();

  const { getByLabelText, getByText } = render(
    <TodoFormContainer onSubmit={onSubmit} />
  );

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

  await wait(() => {
    fireEvent.click(submitButton);
  });

  expect(onSubmit).toHaveBeenCalledWith({
    description: "sample description",
    title: "sample title",
  });
});
