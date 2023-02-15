from fastapi import APIRouter, Depends
from queries.accounts import Account, AccountRepository

router = APIRouter()



@router.post("/accounts")
def create_accounts(
    account: Account,
    repo: AccountRepository = Depends()
    ):
    return repo.create(account)

@router.get("/accounts")
def get_accounts(
    # account: Account,
    repo: AccountRepository = Depends()
    ):
    return {
        "accounts": repo.get_all(),
    }
    

@router.get("/accounts/{username}")
def get_account(
    username: str,
    # account: Account,
    repo: AccountRepository = Depends()
    ):
    return repo.get(username)
  