import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";
import { Flexbox } from "common";
import {
  Wrapper,
  Title,
  Description,
  DeleteButton,
  EditButton,
} from "./TodoListItem.styled";

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
        <Flexbox flexDirection="column">
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Flexbox>
        <Flexbox flexDirection="column" flexBasis="2.5rem" flexShrink={[0]}>
          <DeleteButton data-testid="delete-todo-btn" onClick={handleRemove}>
            x
          </DeleteButton>
          <EditButton data-testid="edit-todo-btn" onClick={handleEdit}>
            Edit
          </EditButton>
        </Flexbox>
      </Flexbox>
    </Wrapper>
  );
}
