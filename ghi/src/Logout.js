import { useLogoutMutation } from "./store/api";

export default function Logout() {
//   const navigate = useNavigate();
  const logOut = useLogoutMutation();

//   useEffect(() => {
//     if (data) {
//       navigate("/");
//     }
//   }, [data, navigate]);

  return (
    <div className="buttons">
    <h1>Logout</h1>
      <button onClick={logOut} className="button is-light">
        Log out
      </button>
    </div>
  );
}
