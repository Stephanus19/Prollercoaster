from pydantic import BaseModel
from typing import Optional
from queries.pool import pool


class Favorites(BaseModel):
    id:int
    user_id: int
    rollercoaster_id: str

class FavoritesIn(BaseModel):
    # user_id: int
    rollercoaster_id: str

class FavoritesOut(BaseModel):
    id: int
    rollercoaster_id: str


class FavoritesRepository:
    def create(self, favorites: FavoritesIn, user_id: int) -> Favorites:
        #connect the DB
        with pool.connection() as conn:
            with conn.cursor() as db:
                #Run our INSERT
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
                # record= None
                id = result.fetchone()[0]
                old_data = favorites.dict()
                return FavoritesOut(id=id, **old_data)
                # if id is not None:
                #     record={}
                #     for i, column in enumerate(db.description):
                #         record[column.name]=id[i]
                # return record


    def get_favorites_by_user(self, user_id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                #Run our INSERT
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


    def delete_favorite(self, id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                #Run our INSERT
                db.execute(
                """
                DELETE FROM favorites
                WHERE id = %s
                """,
                [id]
                )
