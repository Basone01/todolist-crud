import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";
import { Flexbox } from "common";
import { Wrapper, Title, Description } from "./TodoListItem.styled";

export default function TodoListItem({
  todo,
  onRemove,
  onEdit,
}: {
  todo: ToDoListFeature.ITodo;
  onRemove?: (_id: string) => void;
  onEdit?: (_id: string) => void;
}) {
  const { title, description, _id } = todo;

  const handleRemove = useCallback(() => {
    if (onRemove) {
      onRemove(_id);
    }
  }, [_id, onRemove]);

  const handleEdit = useCallback(() => {
    if (onEdit) {
      onEdit(_id);
    }
  }, [_id, onEdit]);

  return (
    <Wrapper data-testid="todo-list-item">
      <Flexbox flexDirection="row">
        <Flexbox flexDirection="column" flexGrow={[1]}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Flexbox>
        <Flexbox
          flexDirection="column"
          justifyContent="space-between"
          flexShrink={[0]}
        >
          <button data-testid="delete-todo-btn" onClick={handleRemove}>
            x
          </button>
          <button data-testid="edit-todo-btn" onClick={handleEdit}>
            Edit
          </button>
        </Flexbox>
      </Flexbox>
    </Wrapper>
  );
}
