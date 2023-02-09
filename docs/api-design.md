API Design

### Get roller coaster list from captain coaster

- Endpoint path: /api/rollercoasters
- Endpoint methods: GET

- Headers:

  - Authorization: Bearer token

- Response: a roller coaster's details
- Response shape:
  ```json
  {

      "roller_coaster": [
          {
              "id": int,
              "name": str,
              "height": int,
              "speed": int,
              "inversionsNumber": int,
              "location": str,
              "park": {
                  "id": str,
                  "name": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```

### get roller coaster detail

- Endpoint path: /api/rollercoasters/{rollercoaster_id}
- Endpoint methods: GET

- Headers:

  - Authorization: Bearer token

- Response: a roller coaster's details
- Response shape:
  ```json
  {
      "roller_coaster": [
          {
              "id": int,
              "name": str,
              "height": int,
              "speed": int,
              "inversionsNumber": int,
              "location": str,
              "park": {
                  "id": str,
                  "name": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              }
          }
      ]
  }
  ```

### get roller coaster list from search bar

- Endpoint path: /api/rollercoasters
- Endpoint methods: GET
- Query parameters:
  - q: the words to search for
- Headers:

  - Authorization: Bearer token

- Response: a roller coaster's details
- Response shape:
  ```json
  {

      "roller_coaster": [
          {
              "id": int,
              "name": str,
              "height": int,
              "speed": int,
              "inversionsNumber": int,
              "location": str,
              "park": {
                  "id": str,
                  "name": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```

### get park list

### get park details

### get image list

### get image details

### get favorites list

### edit favorites list

### delete object from favorites list

### create a favorites list

<!-- ### get list of accounts
* Endpoint path: /api/accounts
* Endpoint methods: GET

* Response: a users account information
* Response shape:
    ```json
    {
        "accounts": [
            {
                "id": int,
                "user": [
                    {
                    "username": str,
                    "password": str,
                    "first_name": str,
                    "last_name": str
                }
            ]
        }
        ]
         -->

### get user information

- Endpoint path: /api/accounts/{username}
- Endpoint methods: GET

- Headers:

  - Authorization:

- Response: a users account information
- Response shape:
  ```json
  {
      "user": [
          {
              "username": str,
              "password": str,
              "first_name": str,
              "last_name": str,
              "email": str,
          }
      ]
  }
  ```

### create a new account

- Endpoint path: /api/accounts
- Endpoint methods: POST

- Headers:

  - Authorization:

- Response: a users account information
- Response shape:
  ```json
  {
      "user": [
          {
              "username": str,
              "password": str,
              "first_name": str,
              "last_name": str,
              "email": str,
          }
      ]
  }
  ```

### Log in

- Endpoint path: /token
- Endpoint method: POST

- Request shape (form):

  - username: string
  - password: string

- Response: Account information and a token
- Response shape (JSON):
  ```json
  {
    "account": {
      "username" : str,
    },
    "token": string
  }
  ```

### Log out

- Endpoint path: /token
- Endpoint method: DELETE

- Headers:

  - Authorization: Bearer token

- Response: Always true
- Response shape (JSON):
  ```json
  true
  ```
