import { useGetFavoritesQuery } from "./store/api";
import { useGetRollercoasterQuery } from "./store/api";

function ShowFavorites() {
  const { data: coasterList, isLoading } = useGetRollercoasterQuery(); //Fetching?
  const { data: favoritesList, isFetching } = useGetFavoritesQuery();

  //   const favorites = favoritesList.map((favorite) => favorite.rollercoaster_id);
  //   console.log(favorites);

  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Favorites List
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Your Favorites
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            {favoritesList.map((favorites) => {
              return (
                <ul>
                  <li>{favorites.rollercoaster_id}</li>
                </ul>
              );
            })}
            ;
          </div>
          {/* <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default ShowFavorites;
