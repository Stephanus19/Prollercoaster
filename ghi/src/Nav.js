import { NavLink } from "react-router-dom";
import { useGetTokenQuery, useLogoutMutation } from "./store/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showModal, LOG_IN_MODAL, SIGN_UP_MODAL } from "./store/accountSlice";
// import logo from "./logo.svg";
import Login from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { useEffect } from "react";
import ShowFavorites from "./FavoritesOffCanvas";

function LoginButtons(props) {
  const dispatch = useDispatch();
  const classNames = `buttons ${props.show ? "" : "is-hidden"}`;

  return (
    <div className={classNames}>
      <button
        onClick={() => dispatch(showModal(SIGN_UP_MODAL))}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <strong>Sign up!</strong>
      </button>
      <button
        onClick={() => dispatch(showModal(LOG_IN_MODAL))}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
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
      <button onClick={logout} className="button is-light">
        Logout
      </button>
    </div>
  );
}

function FavoritesButton(props) {

  return (
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Favorite List
      </button>
  );
}

function Nav() {
  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();
  console.log(token);
  // const {
  //   account: { roles = [] },
  // } = token || { account: {} };

  return (
    <>
    {/* {token ? (
      <ShowFavorites />
      ) : ("Login to see favorites.")} */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="row bottom-buffer">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              {
                // <LoginButtons show={false} />
                token ? (
                  <>
                    <LogoutButton />
                    <FavoritesButton />
                  </>
                ) : (
                  <LoginButtons show={true} />
                )
              }
            </div>
          </div>
          </div>
          </div>
          </div>
        </nav>
        <Login />
        <SignUpModal />
        {/* {token ? ( */}
        <ShowFavorites />
        {/* ) : ("Login to see favorites.")} */}
    </>
  );
}
// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

export default Nav;
