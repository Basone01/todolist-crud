export namespace ToDoListFeature {
  type ITodo = {
    _id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
  };

  type ITodoForm = {
    title: string;
    description: string;
  };
}
