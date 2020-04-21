import React, { createContext, useContext } from "react";
import TodoService from "features/todo/todoService";
import AuthService from "features/auth/authService";

const authService = new AuthService();
const todoService = new TodoService(authService);

export const defaultServiceContext = {
  todoService,
  authService,
};

const ServiceContext = createContext<typeof defaultServiceContext>(
  defaultServiceContext
);

// just use this provider when need to mock some service,
// otherwise use the default context values above
export function ServiceProvider({ children }: React.PropsWithChildren<{}>) {
  return (
    <ServiceContext.Provider value={defaultServiceContext}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServiceContext() {
  const context = useContext(ServiceContext);
  return context;
}
