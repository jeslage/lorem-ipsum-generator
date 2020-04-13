import React, { useState } from "react";
import { NextPage } from "next";

import withApollo from "../graphql/with-apollo";
import { withAuthSync, login } from "../helper/auth";
import { useLoginMutation } from "../graphql/mutations/login.graphql";

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
      <button type="submit">Login</button>
      {error && <p>Wrong username or password.</p>}
    </form>
  );
};

// LoginPage.getInitialProps = async (ctx: WithApolloPageContext) => {
//   console.log(ctx.pageProps);
// };

export default withApollo(withAuthSync(LoginPage));
