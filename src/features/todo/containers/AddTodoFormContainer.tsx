import React, { useMemo } from "react";
import { useFormik } from "formik";
import AddTodoForm from "../components/AddTodoForm";
import { ToDoListFeature } from "../types";
import { todoFormSchema } from "../todoFormSchema";
import { generateErrorsObject } from "../../../libs/generateErrorsObject";

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
    validationSchema: todoFormSchema,
  });

  const errors = useMemo(() => {
    const { touched, errors } = formikContext;
    return generateErrorsObject(errors, touched);
  }, [formikContext]);

  return (
    <AddTodoForm
      values={formikContext.values}
      onSubmit={formikContext.submitForm}
      onChange={formikContext.handleChange}
      onCancel={onCancel}
      errors={errors}
    />
  );
}
