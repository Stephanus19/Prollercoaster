from fastapi.testclient import TestClient
from main import app
from queries.favorites import FavoritesRepository, Favorites, FavoritesIn
from authenticator import authenticator
import json

client = TestClient(app=app)

def fake_get_current_account_data():
    return {
        'id': 12,
        'username': 'pam',
        'email': 'pam@pam.com',
        'first_name': 'sue',
        'last_name': 'notpam'
    }

class FakeFavoritesRepository:
    def create(self, favorites: FavoritesIn, user_id: int) -> Favorites:
        favorites_dict = favorites.dict()
        return Favorites(id=1, user_id=12, **favorites_dict)

    def get_favorites_by_user(self, user_id: int):
        return [{"id": 1, "user_id": 12, "rollercoaster_id": 7}]

    def delete_favorite(self, rollercoaster_id: int):
        return True


def test_create():
    app.dependency_overrides[FavoritesRepository] = FakeFavoritesRepository
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data
    favorite = {
        "rollercoaster_id": 7
    }
    res = client.post('/favorites', json.dumps(favorite))
    print(res.status_code)
    assert res.status_code == 200
    assert res.json()["id"] == 1
    assert res.json()["rollercoaster_id"] == 7

    app.dependency_overrides = {}

def test_get_favorites_by_user():
    app.dependency_overrides[FavoritesRepository] = FakeFavoritesRepository
    app.dependency_overrides[authenticator.get_current_account_data] = fake_get_current_account_data

    res = client.get('/favorites')

    assert res.status_code == 200
    assert res.json() == [{"id": 1, "user_id": 12, "rollercoaster_id": 7}]

    app.dependency_overrides = {}

def test_delete_favorite():
    pass
