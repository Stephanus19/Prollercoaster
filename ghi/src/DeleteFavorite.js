import { useDeleteFavoriteMutation } from "./store/api";
// import { useState, useEffect } from "react";

export default function DeleteFavorite({ rollercoasterId }) {
  // addFavorite is the function used to make a call to the API,
  // data is the data that is returned after the call is made
  const [deleteFavorite, { data }] = useDeleteFavoriteMutation();
  //   const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteFavorite = async (rollercoasterId) => {
    // const favoriteData = { rollercoaster_id: rollercoasterId };
    await deleteFavorite(rollercoasterId);
  };

  // logs 'undefined' 60 times
  console.log(data);

  // set favorited state when data is updated?
  //   useEffect(() => {
  //     console.log(data);
  //     if (data) {
  //       setIsDeleted(true);
  //     }
  //   }, [data]);

  return (
    <button onClick={() => handleDeleteFavorite(rollercoasterId)} className="icon">
      <span className="material-icons">bookmark_remove</span>
      <br></br>
    </button>
  );
}
