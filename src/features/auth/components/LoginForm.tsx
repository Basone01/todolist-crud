import React from "react";
import { LoginFeature } from "features/auth/types";
import { Flexbox, InputLabel, InputUnderline } from "common";

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
      <Flexbox flexDirection="column" mb="0.5rem">
        <InputLabel htmlFor="username">Username</InputLabel>
        <InputUnderline
          type="text"
          id="username"
          name="username"
          onChange={onChange}
          value={username}
        />
      </Flexbox>
      <Flexbox flexDirection="column" mb="0.5rem">
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputUnderline
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </Flexbox>
      <Flexbox flexDirection="row" justifyContent="center" my="1rem">
        <button type="submit">Login</button>
      </Flexbox>
    </form>
  );
}
