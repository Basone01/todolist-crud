import { render } from "@testing-library/react";
import React from "react";

import TodoListItem from "./TodoListItem";

describe("TodoListItem", () => {
  const todo = {
    _id: "sample_id",
    title: "Sample Title",
    description: "Sample Description",
  };

  it("should render title", () => {
    const { getByText } = render(<TodoListItem todo={todo} />);

    const titleElement = getByText(/sample title/i);
    expect(titleElement).toHaveTextContent(todo.title);
  });

  it("should render description", () => {
    const { getByText } = render(<TodoListItem todo={todo} />);

    const descElement = getByText(/sample desc/i);
    expect(descElement).toHaveTextContent(todo.description);
  });
});
