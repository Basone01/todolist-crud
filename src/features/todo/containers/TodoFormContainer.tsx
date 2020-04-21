import React from "react";
import { FormikContext, useFormik } from "formik";
import TodoForm from "../components/TodoForm";
import { ToDoListFeature } from "../types";

interface IProps {
  onSubmit: (values: ToDoListFeature.ITodoForm) => void;
}

export default function TodoFormContainer({ onSubmit }: IProps) {
  const formikContext = useFormik<ToDoListFeature.ITodoForm>({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values) => {
      onSubmit(values);
    },
  });
  return (
    <FormikContext.Provider value={formikContext}>
      <TodoForm />
    </FormikContext.Provider>
  );
}
