from fastapi import APIRouter, Depends
from queries.favorites import Favorites, FavoritesIn, FavoritesOut, FavoritesRepository
from authenticator import authenticator


router = APIRouter()

@router.post("/favorites", response_model= FavoritesOut)
def create_favorite(
    info: FavoritesIn,
    repo: FavoritesRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return repo.create(info, user_id = account_data["id"])


@router.get("/favorites")
def get_favorite_by_user(
    # user_id: int,
    repo: FavoritesRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return repo.get_favorites_by_user(user_id = account_data["id"])


@router.delete("/favorites")
def delete_favorite(
    rollercoaster_id: int,
    repo: FavoritesRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return repo.delete_favorite(rollercoaster_id, user_id = account_data["id"])
