import { render } from "@testing-library/react";
import React from "react";
import TodoList from "./TodoList";

describe("TodoList", () => {
  const todos = [
    {
      _id: "sample_id_1",
      title: "Sample Title 1",
      description: "Sample Description 1",
    },
    {
      _id: "sample_id_2",
      title: "Sample Title 2",
      description: "Sample Description 2",
    },
    {
      _id: "sample_id_3",
      title: "Sample Title 3",
      description: "Sample Description 3",
    },
  ];

  it("should render TodoListItem", () => {
    const { getAllByTestId } = render(<TodoList todos={todos} />);

    const listItems = getAllByTestId("todo-list-item");

    expect(listItems).toHaveLength(3);
  });

  it("should render empty message when no todo", () => {
    const { getByText } = render(<TodoList todos={[]} />);

    const p = getByText(/empty/i);
  });
});
