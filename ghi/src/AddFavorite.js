import {
  useAddFavoriteMutation,
  useGetFavoritesQuery,
  useGetTokenQuery,
} from "./store/api";

export default function AddFavorite({ rollercoasterId }) {
  // addFavorite is the function used to make a call to the API,
  // data is the data that is returned after the call is made
  const [addFavorite, { data }] = useAddFavoriteMutation();
  const { data: favoritesList } = useGetFavoritesQuery();
  const { data: token } = useGetTokenQuery();
  const handleAddFavorite = async (rollercoasterId) => {
    const favoriteData = { rollercoaster_id: rollercoasterId };
    await addFavorite(favoriteData);
  };
  const theList = favoritesList?.map((favorite) => favorite.rollercoaster_id);
  if (token) {
    return (
      <button
        onClick={() => handleAddFavorite(rollercoasterId)}
        className="bg-white icon"
      >
        {theList?.includes(rollercoasterId) ? (
          <>
            <span className="material-icons" id="add-favorite">
              bookmark_add
            </span>
            <br></br>
            favorited
          </>
        ) : (
          <>
            <span className="material-icons">bookmark_add</span>
            <br></br>
          </>
        )}
      </button>
    );
  } else {
    return <div> Not sure what to put here</div>;
  }
}
