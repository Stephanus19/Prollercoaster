API Design

### Get roller coaster list from captain coaster

- Endpoint path: /api/rollercoasters
- Endpoint methods: GET

- Request body:
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
                  "country": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```

- Response: A successful get request for roller coaster list
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
                  "country": str,
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

- Request body:
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
                  "country": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```

- Response: a successful get request for a roller coaster detail
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
                  "country": str,
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
                  "country": str,
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

- Endpoint path: /api/parks/
- Endpoint methods: GET

- Request body:
  ```json
  {
      "parks": [
        {
          "id": int,
          "name": str,
          "country": {
            "name": str
          },
        }
      ]
  }
  ```

- Response: a list of parks
- Response shape:
  ```json
  {
      "parks": [
        {
          "id": int,
          "name": str,
          "country": {
            "name": str
          },
        }
      ]
  }
  ```

### get park details

- Endpoint path: /api/parks/{park_id}
- Endpoint methods: GET

- Request body:
  ```json
  {
      "parks": [
        {
          "id": int,
          "name": str,
          "country": {
            "name": str
          },
        }
      ]
  }
  ```

- Response: get park detail
- Response shape:
  ```json
  {
      "parks": [
        {
          "id": int,
          "name": str,
          "country": {
            "name": str
          },
        }
      ]
  }
  ```

### get image list
- Endpoint path: /api/images/
- Endpoint methods: GET

- Request body:
  ```json
  {
      "images": [
        {
          "id": str,
          "coaster": str,  // reference to coaster href
          "path": str,
        }
      ]
  }
  ```

- Response: a successful get request for roller coaster image
- Response shape:
  ```json
  {
      "images": [
        {
          "id": str,
          "coaster": str,  // reference to coaster href
          "path": str,
        }
      ]
  }
  ```

### get image details
- Endpoint path: /api/images/{image_id}
- Endpoint methods: GET

- Request body:
  ```json
  {
      "images": [
        {
          "id": str,
          "coaster": str,  // reference to coaster href
          "path": str,
        }
      ]
  }
  ```

- Response: a successful get request for roller coaster image detail
- Response shape:
  ```json
  {
      "images": [
        {
          "id": str,
          "coaster": str,  // reference to coaster href
          "path": str,
        }
      ]
  }
  ```

### get favorites list
- Endpoint path: /api/favorites/{user_id}
- Endpoint methods: GET

- Request body:
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
                  "country": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```

- Headers:
  - Authorization: Bearer token

- Response: a roller coaster's details
- Response shape:
  ```json
  {
      "roller_coaster": [
          {
              "user_id": int,
              "id": int,
              "name": str,
              "height": int,
              "speed": int,
              "inversionsNumber": int,
              "location": str,
              "park": {
                  "id": str,
                  "name": str,
                  "country": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```
### edit favorites list
- Endpoint path: /api/favorites/{user_id}
- Endpoint methods: PUT

- Headers:
  - Authorization: Bearer token

- Request body (form):
  ```json
  {
    "roller_coaster": [
      {
        "user_id": int,
        "id": int,
        "name": str,
        "description": str,
      },
    ]
  }
  ```

- Response: Updated favorites list
- Response shape:
  ```json
  {
    "roller_coaster": [
      {
        "user_id": int,
        "id": int,
        "name": str,
        "description": str,
      },
    ]
  }
  ```
### delete object from favorites list
- Endpoint path: /api/favorites/{user_id}
- Endpoint methods: DELETE

- Headers:
  - Authorization: Bearer token

  - Request body:
  ```json
  {
    "roller_coaster": [
      {
        "user_id": int,
        "id": int,
      },
    ]
  }
  ```

- Response: Deleted item from favorites list
- Response shape:
  ```json
  {
    "message": "favorite removed."
  }
  ```

### create a favorites list item
- Endpoint path: /api/favorites/{user_id}
- Endpoint methods: POST

- Headers:
  - Authorization: Bearer token

- Request body (form):
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
                  "country": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```

- Response: Adding an item to favorites list
- Response shape:
  ```json
  {
      "roller_coaster": [
          {
              "user_id": int,
              "favorited": boolean,
              "id": int,
              "name": str,
              "height": int,
              "speed": int,
              "inversionsNumber": int,
              "location": str,
              "park": {
                  "id": str,
                  "name": str,
                  "country": str,
              },
              "mainImage":{
                  "id": str,
                  "path": str,
              },
          }
      ]
  }
  ```

### get user information

- Endpoint path: /api/accounts/{username}
- Endpoint methods: GET

- Headers:
  - Authorization: Bearer token

- Request body:
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

- Request body (form):
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

- Headers:
  - Authorization:

- Response: Created a user account
- Response shape:
  ```json
  {
      "user": [
          {
              "user_id": int,
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
