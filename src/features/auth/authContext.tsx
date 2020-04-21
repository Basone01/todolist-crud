import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { useServiceContext } from "ServiceContext";
import { LoginFeature } from "./types";

type IAuthContext = {
  isAuth: boolean;
  handleLogin: ({ username, password }: LoginFeature.ILoginForm) => void;
  isLoadingFirstAuth: boolean;
};

const AuthContext = createContext<IAuthContext | null>(null);

export function AuthContextProvider({ children }: React.PropsWithChildren<{}>) {
  const { authService, todoService } = useServiceContext();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoadingFirstAuth, setIsLoadingFirstAuth] = useState(true);

  const handleLogin = useCallback(
    async ({ username, password }: LoginFeature.ILoginForm) => {
      try {
        await authService.auth(username, password);
        setIsAuth(true);
      } catch (error) {
        alert(error.message);
      }
    },
    [authService]
  );

  useEffect(() => {
    (async function () {
      try {
        authService.getPersistedToken();
        if (authService.token) {
          await todoService.getAll();
        }
        setIsAuth(true);
      } catch (error) {
        authService.clearToken();
      } finally {
        setIsLoadingFirstAuth(false);
      }
    })();
  }, [authService, todoService]);

  const context = {
    isAuth,
    handleLogin,
    isLoadingFirstAuth,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Can only useAuthContext inside AuthProvider");
  }
  return context;
}

export function AuthContextConsumer({
  children,
}: {
  children: (authContext: IAuthContext) => JSX.Element | null;
}) {
  return children(useAuthContext());
}
