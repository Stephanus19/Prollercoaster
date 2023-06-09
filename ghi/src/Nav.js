import { useGetTokenQuery, useLogoutMutation } from "./store/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal, LOG_IN_MODAL, SIGN_UP_MODAL } from "./store/accountSlice";
import Login from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { useEffect } from "react";
import ShowFavorites from "./FavoritesOffCanvas";
import BlueFire from "./EEPOV2";

export function LoginButtons(props) {
  const dispatch = useDispatch();
  const classNames = `buttons ${props.show ? "" : "is-hidden"}`;

  return (
    <div className={classNames}>
      <button
        onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
        type="button"
        className="btn icon"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
        id="signup-icon"
      >
        <span className="material-icons">person_add</span>
        <br></br>Sign Up
      </button>
      <button
        onClick={() => dispatch(showModal(LOG_IN_MODAL))}
        type="button"
        className="btn icon"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
        id="login-icon"
      >
        <span className="material-icons">login</span>
        <br></br>Login
      </button>
    </div>
  );
}

function LogoutButton() {
  const navigate = useNavigate();
  const [logout, { data }] = useLogoutMutation();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="buttons">
      <button onClick={logout} className="btn icon" id="logout-icon">
        <span className="material-icons">logout</span>
        <br></br>Logout
      </button>
    </div>
  );
}

function FavoritesButton(props) {
  return (
    <button
      type="button"
      className="btn icon"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
      id="favorites-icon"
    >
      <>
        <span className="material-icons">bookmarks</span>
        <br></br> Favorites
      </>
    </button>
  );
}

function Nav() {
  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <div className="container">
          <img
            src="rollercoastericon.png"
            alt="rollercoaster icon"
            width="60px"
          />
          Proller Coaster
        </div>
        {token ? (
          <div className="container" id="welcome-string">
            <h5 id="welcome-string"> Welcome, {token.account.username}!</h5>
          </div>
        ) : (
          ""
        )}
        <div className="container-fluid">
          <div className="row bottom-buffer">
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="nav navbar-nav" id="buttons">
                <div className="navbar-item">
                  {token ? (
                    <>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <FavoritesButton />
                        <LogoutButton />
                      </div>
                    </>
                  ) : (
                    <LoginButtons show={true} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Login />
      <SignUpModal />
      {token ? <ShowFavorites /> : ""}
    </>
  );
}

export default Nav;
