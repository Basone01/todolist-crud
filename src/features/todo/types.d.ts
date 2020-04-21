export namespace ToDoListFeature {
  type ITodo = {
    _id: string;
    title: string;
    description: string;
  };

  type ITodoForm = {
    title: string;
    description: string;
  };
}
