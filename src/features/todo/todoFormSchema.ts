import * as Yup from "yup";
import { ToDoListFeature } from "./types";

export const todoFormSchema = Yup.object<ToDoListFeature.ITodoForm>({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});
