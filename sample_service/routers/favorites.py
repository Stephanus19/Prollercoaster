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


@router.get("/favorites/{user_id}")
def get_favorite_by_user(
    # user_id: int,
    repo: FavoritesRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data)
):
    return repo.get_favorites_by_user(user_id = account_data["id"])


@router.delete("/favorites/{id}")
def delete_favorite(
    id: int,
    repo: FavoritesRepository = Depends(),
):
    return repo.delete_favorite(id)
