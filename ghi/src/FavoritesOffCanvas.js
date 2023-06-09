import { useGetFavoritesQuery } from "./store/api";
import { useGetRollercoasterQuery } from "./store/api";
import DeleteFavorite from "./DeleteFavorite";

function ShowFavorites() {
  const { data: coasterList, isLoading } = useGetRollercoasterQuery();
  const { data: favoritesList, isFetching } = useGetFavoritesQuery();

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }

  const theList = favoritesList?.map((favorite) => favorite.rollercoaster_id);
  const favoritedCoasters = coasterList?.filter((coasterItem) =>
    theList?.includes(coasterItem.id)
  );

  return (
    <>
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
            {favoritedCoasters?.map((favorites) => {
              return (
                <div
                  className="card h-10 m-3 border-light"
                  style={{ width: "18rem" }}
                  key={favorites.id}
                >
                  <div className="container card-image-container">
                    <img
                      src={`https://captaincoaster.com/images/coasters/${favorites.mainImage.path}`}
                      className="card-img-top"
                      style={{ height: "15rem" }}
                      alt="rollercoaster"
                    />
                    <DeleteFavorite rollercoasterId={favorites.id} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{favorites.name}</h5>
                    <h6 className="card-title">{favorites.park.name}</h6>
                    <div className="card-text">
                      <div key={favorites.speed}>
                        <em>Speed: </em>{" "}
                        {Math.floor(favorites.speed * 0.621371192)} mph
                      </div>
                      <div key={favorites.height}>
                        <em>Height: </em>{" "}
                        {Math.floor(favorites.height * 3.28084)} ft
                      </div>
                      <div key={favorites.inversionsNumber}>
                        {" "}
                        <em>Inversions: </em>
                        {favorites.inversionsNumber}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ShowFavorites;
