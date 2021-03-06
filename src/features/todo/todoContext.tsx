import React, { useCallback } from "react";

import { createContext, useContext, useState } from "react";
import { ToDoListFeature } from "./types";
import { useServiceContext } from "ServiceContext";

type ITodoContext = {
  todos: ToDoListFeature.ITodo[];
  isLoadingTodos?: boolean;
  createTodo: (todo: ToDoListFeature.ITodoForm) => Promise<void>;
  deleteTodo: (_id: string) => Promise<void>;
  updateTodo: (_id: any, todo: ToDoListFeature.ITodoForm) => Promise<void>;
  fetchAllTodos: () => Promise<void>;
};

const TodoContext = createContext<ITodoContext | null>(null);

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Must call useTodoContext inside TodoContextProvider");
  }

  return context;
}

export function TodoProvider({ children }: React.PropsWithChildren<{}>) {
  const { todoService } = useServiceContext();
  const [todos, setTodos] = useState<ToDoListFeature.ITodo[]>([]);
  const [isLoadingTodos, setIsLoadingTodos] = useState(true);

  const addTodo = useCallback((todo: ToDoListFeature.ITodo) => {
    setTodos((todos) => todos.concat(todo));
  }, []);

  const removeTodo = useCallback((_id: string) => {
    setTodos((todos) => todos.filter((todo) => todo._id !== _id));
  }, []);

  const replaceTodo = useCallback((newTodo: ToDoListFeature.ITodo) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        const isTargetTodo = todo._id === newTodo._id;
        if (isTargetTodo) {
          return newTodo;
        }
        return todo;
      });
    });
  }, []);

  // services call

  const fetchAllTodos = useCallback(async () => {
    try {
      setIsLoadingTodos(true);
      const responseTodos = await todoService.getAll();
      setTodos(responseTodos);
    } catch (error) {
      alert(error.data.message);
    } finally {
      setIsLoadingTodos(false);
    }
  }, [todoService]);

  const createTodo = useCallback(
    async (todo: ToDoListFeature.ITodoForm) => {
      try {
        const responseTodo = await todoService.create(todo);
        addTodo(responseTodo);
      } catch (error) {
        console.error(error);
      }
    },
    [addTodo, todoService]
  );

  const deleteTodo = useCallback(
    async (_id: string) => {
      try {
        await todoService.delete(_id);
        removeTodo(_id);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    },
    [removeTodo, todoService]
  );

  const updateTodo = useCallback(
    async (_id, todo: ToDoListFeature.ITodoForm) => {
      try {
        const responseTodo = await todoService.update(_id, todo);
        replaceTodo(responseTodo);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    },
    [replaceTodo, todoService]
  );

  const context = {
    todos,
    isLoadingTodos,
    createTodo,
    deleteTodo,
    updateTodo,
    fetchAllTodos,
  };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
}
