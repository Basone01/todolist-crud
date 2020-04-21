import React from "react";
import { useFormik } from "formik";
import TodoForm from "../components/TodoForm";
import { ToDoListFeature } from "../types";

interface IProps {
  onSubmit: (
    values: ToDoListFeature.ITodoForm,
    formActions: { resetForm: () => void }
  ) => void;
}

export default function TodoFormContainer({ onSubmit }: IProps) {
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
    <TodoForm
      values={formikContext.values}
      onSubmit={formikContext.submitForm}
      onChange={formikContext.handleChange}
    />
  );
}
