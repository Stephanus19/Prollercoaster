import { useDeleteFavoriteMutation } from "./store/api";

export default function DeleteFavorite({ rollercoasterId }) {
  const [deleteFavorite, { data }] = useDeleteFavoriteMutation();

  const handleDeleteFavorite = async (rollercoasterId) => {
    await deleteFavorite(rollercoasterId);
  };

  return (
    <button
      onClick={() => handleDeleteFavorite(rollercoasterId)}
      className="icon"
    >
      <span className="material-icons favorites">bookmark_remove</span>
      <br></br>
    </button>
  );
}
