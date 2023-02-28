import { useAddFavoriteMutation } from "./store/api";
import { useState, useEffect } from "react";

export default function AddFavorite({ rollercoasterId }) {
  // addFavorite is the function used to make a call to the API,
  // data is the data that is returned after the call is made
  const [addFavorite, { data }] = useAddFavoriteMutation();
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddFavorite = async (rollercoasterId) => {
    const favoriteData = { rollercoaster_id: rollercoasterId };
    await addFavorite(favoriteData);
  };

  // logs 'undefined' 60 times
  console.log(data);

  // set favorited state when data is updated?
  useEffect(() => {
    console.log(data);
    if (data) {
      setIsFavorited(true);
    }
  }, [data]);

  return (
    <button onClick={() => handleAddFavorite(rollercoasterId)}>
      {isFavorited ? "Favorited" : "Add to Favorites"}
    </button>
  );
}

// currently allows for duplicate favorited roller coasters
// change button appearance after rc is favorited
// only show button if user is logged in
