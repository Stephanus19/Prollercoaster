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

// function ShowFavorites() {
//   // const dispatch = useDispatch();

//   return (
//     <div className="buttons">
//       <button
//         onClick={ShowFavorites()}
//         className="btn btn-danger"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#demo"
//       >
//         Favorites List
//       </button>
//     </div>
//   );
// }
// console.log(typeof ShowFavorites);

function Nav() {
  const { data: token, isLoading: tokenLoading } = useGetTokenQuery();
  console.log(token);
  // const {
  //   account: { roles = [] },
  // } = token || { account: {} };

  return (
    <>
      <ShowFavorites />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <NavLink className="navbar-item" to="/">
            <img src={logo} height="86" width="43" alt="" />
          </NavLink> */}
          {/* <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button> */}
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          {/* <div className="navbar-start">
            <NavLink className="navbar-item" to="/">Tiny Library</NavLink>
            {roles.includes('librarian')
              ? <>
                <NavLink className="navbar-item" to="manage-books/new">
                  Add books
                </NavLink>
              </>
              : ''}
          </div> */}
          <div className="navbar-end">
            <div className="navbar-item">
              {
                // <LoginButtons show={false} />
                token ? (
                  <>
                    <LogoutButton />
                    {/* <ShowFavorites /> */}
                  </>
                ) : (
                  <LoginButtons show={true} />
                )
              }
            </div>
          </div>
        </div>
      </nav>
      <Login />
      <SignUpModal />
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
