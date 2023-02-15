# from pydantic import BaseModel
# import os
# from psycopg_pool import ConnectionPool
# from typing import List, Optional, Union

# pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

# class DuplicateAccountError(ValueError):
#     pass

# class AccountIn(BaseModel):
#     username: str
#     password: str
#     # email: str
#     # first_name: str
#     # last_name:str

# class AccountOut(AccountIn):
#     id: int

# class AccountQueries():
#     def create(self, account: AccountIn) -> AccountOut:
#         try:
#             with pool.connection() as conn:
#                 with conn.cursor() as cur:
#                     result = cur.execute(
#                         """
#                         INSERT INTO accounts
#                         """
#                     )
