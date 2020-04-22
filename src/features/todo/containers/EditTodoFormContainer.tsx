import React, { useMemo } from "react";
import { useFormik } from "formik";
import EditTodoForm from "../components/EditTodoForm";
import { ToDoListFeature } from "../types";
import { todoFormSchema } from "../todoFormSchema";
import { generateErrorsObject } from "../../../libs/generateErrorsObject";

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
    validationSchema: todoFormSchema,
  });

  const errors = useMemo(() => {
    const { touched, errors } = formikContext;
    return generateErrorsObject(errors, touched);
  }, [formikContext]);

  return (
    <EditTodoForm
      values={formikContext.values}
      onSubmit={formikContext.submitForm}
      onChange={formikContext.handleChange}
      onCancel={onCancel}
      errors={errors}
    />
  );
}
