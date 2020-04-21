import React from "react";
import { useFormik } from "formik";
import AddTodoForm from "../components/AddTodoForm";
import { ToDoListFeature } from "../types";

interface IProps {
  onSubmit: (
    values: ToDoListFeature.ITodoForm,
    formActions: { resetForm: () => void }
  ) => void;
  onCancel?: () => void;
}

export default function AddTodoFormContainer({ onSubmit, onCancel }: IProps) {
  const formikContext = useFormik<ToDoListFeature.ITodoForm>({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values, formikActions) => {
      onSubmit(values, { resetForm: formikActions.resetForm });
    },
  });

  return (
    <AddTodoForm
      values={formikContext.values}
      onSubmit={formikContext.submitForm}
      onChange={formikContext.handleChange}
      onCancel={onCancel}
    />
  );
}
