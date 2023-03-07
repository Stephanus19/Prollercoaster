import { useLoginMutation, useGetTokenQuery } from "./store/api";
import { useSelector, useDispatch } from "react-redux";
import { eventTargetSelector as target, preventDefault } from "./store/utils";
import {
  updateField,
  LOG_IN_MODAL,
  SIGN_UP_MODAL,
  showModal,
} from "./store/accountSlice";
import { useCallback } from "react";

function Login() {
  const dispatch = useDispatch();
  // selects properties from account slice
  const { show, username, password } = useSelector((state) => state.account);
  const modalClass = `modal ${show === LOG_IN_MODAL ? "is-active" : ""}`;
  const [login, { isLoading }] = useLoginMutation();
  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );

  const handleSubmit = (e) => {
    e.preventDefault(login, target);
    const { username, password } = e.target.elements;
    login({ username: username.value, password: password.value });
  };

  const { data } = useGetTokenQuery();
  const isLoggedIn = !!data?.access_token;


  return (
    // <div className={modalClass} key="login-modal">
    //   <h1>hello</h1>
    //   {/* {error ? (
    //     <Notification type="danger">{error.data.detail}</Notification>
    //   ) : null} */}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         type="text"
    //         id="username"
    //         required
    //         onChange={field}
    //         value={username}
    //         name="username"
    //         className="input"
    //         placeholder="username"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         id="password"
    //         required
    //         onChange={field}
    //         value={password}
    //         name="password"
    //         className="input"
    //         placeholder="password"
    //       />
    //     </div>
    //     <button type="submit" disabled={isLoading}>
    //       {isLoading ? "Logging in..." : "Log in"}
    //     </button>
    //   </form>
    // </div>

    // <div className={modalClass} key="login-modal">
    <form onSubmit={handleSubmit}>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="LoginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="LoginModalLabel">
                <img
                  src="rollercoastericon.png"
                  alt="rollercoaster icon"
                  width="60px"
                />
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="username">Username </label>
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
            <div className="modal-body">
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
            {/* </div> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                data-bs-dismiss="modal"
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
              <p>
                Don't have an account yet?{" "}
                <button
                  onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
                  type="button"
                  className="btn icon"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  id="secondary-signup-icon"
                >
                  Sign Up!
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
