import React, { useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";

import withApollo from "../graphql/with-apollo";
import { withAuthSync, login } from "../helper/auth";
import { useLoginMutation } from "../graphql/mutations/login.graphql";
import Button from "../components/Button";

const StyledLogin = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }

  input {
    background: none;
    color: ${props => props.theme.colors.color};
    border: 2px solid ${props => props.theme.colors.color};
    padding: 10px 15px;

    font-weight: bold;
    font-size: 12px;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
  }
`;

const LoginPage: NextPage = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginMutation] = useLoginMutation();

  const handleLogin = async e => {
    e.preventDefault();
    const { data } = await loginMutation({ variables: { username, password } });

    if (data?.login?.token) {
      login({ token: data.login.token });
    } else {
      setError(true);
    }
  };

  return (
    <StyledLogin>
      <form onSubmit={e => handleLogin(e)}>
        <input
          type="text"
          onFocus={() => setError(false)}
          onChange={e => setUsername(e.target.value)}
          value={username}
          name="username"
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="password"
          onFocus={() => setError(false)}
          onChange={e => setPassword(e.target.value)}
          value={password}
          name="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <Button type="submit">Login</Button>
        {error && <p>Wrong username or password.</p>}
      </form>
    </StyledLogin>
  );
};

export default withApollo(withAuthSync(LoginPage));
