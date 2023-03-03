import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSignUpMutation } from "./store/api";
import { preventDefault } from "./store/utils";
import {
  showModal,
  updateField,
  SIGN_UP_MODAL,
  LOG_IN_MODAL,
} from "./store/accountSlice";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import LoginButtons from "./Nav";
import Login from "./LoginModal";

function SignUpModal() {
  const dispatch = useDispatch();
  const { show, username, password, first_name, last_name, email } =
    useSelector((state) => state.account);
  const modalClass = `modal ${show === SIGN_UP_MODAL ? "is-active" : ""}`;
  const [signUp, { error, isLoading: signUpLoading }] = useSignUpMutation();
  const field = useCallback(
    (e) =>
      dispatch(updateField({ field: e.target.name, value: e.target.value })),
    [dispatch]
  );

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Sign Up
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {error ? (
              <Notification type="danger">{error.data.detail}</Notification>
            ) : null}
            <form
              method="POST"
              onSubmit={preventDefault(signUp, () => ({
                username,
                email,
                password,
                first_name,
                last_name,
              }))}
            >
              <div className="field">
                <label className="label" htmlFor="username">
                  Username
                </label>
                <div className="control">
                  <input
                    required
                    onChange={field}
                    value={username}
                    name="username"
                    className="input"
                    type="username"
                    placeholder="username"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    required
                    onChange={field}
                    value={password}
                    name="password"
                    className="input"
                    type="password"
                    placeholder="secret..."
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    required
                    onChange={field}
                    value={first_name}
                    name="first_name"
                    className="input"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    required
                    onChange={field}
                    value={last_name}
                    name="last_name"
                    className="input"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    required
                    onChange={field}
                    value={email}
                    name="email"
                    className="input"
                    type="text"
                    placeholder="user@domain.com"
                  />
                </div>
              </div>
              <div className="modal-footer">
                {/* <button
                  type="button"
                  onClick={() => dispatch(showModal(null))}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button> */}
                <button
                  onClick={() => dispatch(showModal(null))}
                  disabled={signUpLoading}
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Sign Up
                </button>
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => dispatch(showModal(LOG_IN_MODAL))}
                    type="button"
                    className="btn icon"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    id="secondary-login-icon"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
