import { FormErrorsObject } from "libs/types";

export function generateErrorsObject<T extends { [key: string]: any }>(
  errors: any,
  touched: any
) {
  const resultErrors: FormErrorsObject<T> = {};

  for (const key in errors) {
    const haveErrorMessage = errors[key];
    const hasBeenTouchedByUser = touched[key];

    if (haveErrorMessage && hasBeenTouchedByUser) {
      resultErrors[key as keyof T] = errors[key];
    }
  }
  return resultErrors;
}
