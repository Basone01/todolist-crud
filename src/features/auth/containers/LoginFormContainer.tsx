import React, { useCallback, useState } from "react";
import LoginForm from "features/auth/components/LoginForm";
import { LoginFeature } from "features/auth/types";

export default function LoginFormContainer({
  onSubmit,
}: {
  onSubmit: (values: LoginFeature.ILoginForm) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ username, password });
    },
    [onSubmit, password, username]
  );
  return (
    <LoginForm
      values={{ username, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
