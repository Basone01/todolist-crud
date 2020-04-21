import React from "react";
import { LoginFeature } from "features/auth/types";

export default function LoginForm({
  values,
  onChange,
  onSubmit,
}: {
  values: LoginFeature.ILoginForm;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const { username, password } = values;
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={onChange}
        value={username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={onChange}
        value={password}
      />
      <button type="submit">Login</button>
    </form>
  );
}
