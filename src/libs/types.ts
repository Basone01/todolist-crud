export type FormErrorsObject<Values = {}> = {
  [K in keyof Values]?: string;
};
