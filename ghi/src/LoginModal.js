import { useLoginMutation, useGetTokenQuery } from "./store/api";
import { useSelector, useDispatch } from "react-redux";
import { updateField, clearForm } from "./store/accountSlice";
import { useCallback } from "react";

function Login() {
  const dispatch = useDispatch();
  // selects properties from account slice
  const { username, password } = useSelector((state) => state.account);

  const [login, { isLoading }] = useLoginMutation();
  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    login({ username: username.value, password: password.value });
  };

    const { data } = useGetTokenQuery();
    const isLoggedIn = !!data?.access_token;
    console.log(isLoggedIn);
    console.log(data);

    return (
    <div>
      <h1>hello</h1>
      {/* {error ? (
        <Notification type="danger">{error.data.detail}</Notification>
      ) : null} */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            onChange={field}
            value={username}
            name="username"
            className="input"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={field}
            value={password}
            name="password"
            className="input"
            placeholder="password"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log in"}
        </button>
        </form>
    </div>
  );
}

export default Login;
