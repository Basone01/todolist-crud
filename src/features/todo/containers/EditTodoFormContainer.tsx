import React from "react";
import { useFormik } from "formik";
import EditTodoForm from "../components/EditTodoForm";
import { ToDoListFeature } from "../types";

interface IProps {
  initialValues?: ToDoListFeature.ITodoForm;
  onSubmit: (
    values: ToDoListFeature.ITodoForm,
    formActions: { resetForm: () => void }
  ) => void;
  onCancel?: () => void;
}

export default function EditTodoFormContainer({
  onSubmit,
  initialValues = {
    title: "",
    description: "",
  },
  onCancel,
}: IProps) {
  const formikContext = useFormik<ToDoListFeature.ITodoForm>({
    initialValues: initialValues,
    onSubmit: async (values, formikActions) => {
      onSubmit(values, { resetForm: formikActions.resetForm });
    },
  });

  return (
    <EditTodoForm
      values={formikContext.values}
      onSubmit={formikContext.submitForm}
      onChange={formikContext.handleChange}
      onCancel={onCancel}
    />
  );
}
