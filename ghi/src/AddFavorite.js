import {
  useAddFavoriteMutation,
  useGetFavoritesQuery,
  useGetTokenQuery,
} from "./store/api";

export default function AddFavorite({ rollercoasterId }) {
  const [addFavorite] = useAddFavoriteMutation();
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
            <span
              className="material-icons favorites favorited-button"
              id="add-favorite"
            >
              bookmark_added
            </span>
          </>
        ) : (
          <>
            <span className="material-icons favorites">bookmark_add</span>
            <br></br>
          </>
        )}
      </button>
    );
  }
}
