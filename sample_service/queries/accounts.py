from pydantic import BaseModel
from typing import Optional
from queries.pool import pool


class DuplicateAccountError(ValueError):
    pass
    


class Account(BaseModel):
    username: str
    password: str
    email: str
    first_name: str
    last_name: str


class AccountOut(BaseModel):
    id: int
    username: str
    password: str
    email: str
    first_name: str
    last_name: str


class AccountOutWithPassword(AccountOut):
    hashed_password: str



class AccountRepository:
    def create(self, account: Account) -> AccountOut:
        #connect the DB
        with pool.connection() as conn:
            with conn.cursor() as db:
                #Run our INSERT
                result = db.execute(
                """
                INSERT INTO accounts
                    (username, password, email, first_name, last_name)
                VALUES
                (%s,%s,%s,%s,%s)
                RETURNING id;
                """,
                [
                    account.username,
                    account.password,
                    account.email,
                    account.first_name,
                    account.last_name
                ]
                )
                id = result.fetchone()[0]
                old_data = account.dict()
                return AccountOut(id=id, **old_data)

    def get(self, username: str) -> AccountOut:
        #connect the DB
            with pool.connection() as conn:
                with conn.cursor() as db:
                #Run our INSERT
                    result = db.execute(
                    """
                    SELECT 
                        id, username, password, email, first_name, last_name
                    FROM accounts
                    WHERE username = %s;
                    """,
                    [username]
                    )
                    record = result.fetchone()
                    if record is None:
                        return None
                    # old_data = account.dict()
                    # return Account(id=id[0], username=id[1], **old_data)
                    return self.record_to_account_out(record)

    def record_to_account_out(self, record):
        return AccountOut(
            id=record[0],
            username=record[1],
            first_name=record[2],
            last_name=record[3],
            email=record[4],
            password=record[5],
        )

    def get_all(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                pam = cur.execute(
                """
                SELECT
                    username, password, email, first_name, last_name
                FROM accounts
                """,
                )
                results = []
                for row in pam.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results





    






