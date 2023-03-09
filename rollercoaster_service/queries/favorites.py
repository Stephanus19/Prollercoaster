from pydantic import BaseModel
from queries.pool import pool


class Favorites(BaseModel):
    id:int
    user_id: int
    rollercoaster_id: int


class FavoritesIn(BaseModel):
    rollercoaster_id: int


class FavoritesOut(BaseModel):
    id: int
    rollercoaster_id: int


class FavoritesRepository:
    def create(self, favorites: FavoritesIn, user_id: int) -> Favorites:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                """
                INSERT INTO favorites
                    (user_id, rollercoaster_id)
                VALUES
                (%s,%s)
                RETURNING id;
                """,
                [
                    user_id,
                    favorites.rollercoaster_id,
                ]
                )
                id = result.fetchone()[0]
                old_data = favorites.dict()
                return FavoritesOut(id=id, **old_data)

    def get_favorites_by_user(self, user_id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id, user_id, rollercoaster_id
                    FROM favorites
                    WHERE user_id = %s
                    """,
                    [user_id]
                )
                print("result", result)
                results = []
                for row in result.fetchall():
                    record = {}
                    for i, column in enumerate(db.description):
                        record[column.name] = row[i]
                        print("record", record)
                    results.append(record)
                return results


    def delete_favorite(self, rollercoaster_id: int, user_id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM favorites
                    WHERE rollercoaster_id = %s AND user_id = %s
                    """,
                    [rollercoaster_id, user_id]
                )
