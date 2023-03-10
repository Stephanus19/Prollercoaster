                                      Table "public.accounts"
|   Column   |          Type           | Collation | Nullable |               Default                |
| :--------- | :---------------------: | :--------:| :------: | ---------------------------------:   | 
| id         | integer                 |           | not null | nextval('accounts_id_seq'::regclass) |
| username   | character varying(50)   |           | not null |                                      |
| password   | character varying(1000) |           | not null |                                      |
| first_name | character varying(50)   |           | not null |                                      |
| last_name  | character varying(50)   |           | not null |                                      |
| email      | character varying(50)   |           | not null |                                      |
Indexes:
    "accounts_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "favorites" CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY (user_id) REFERENCES accounts(id)


                                 Table "public.favorites"
      Column      |  Type   | Collation | Nullable |                Default                
------------------|---------|-----------|----------|--------------------------------------
 id               | integer |           | not null | nextval('favorites_id_seq'::regclass)
 user_id          | integer |           | not null | 
 rollercoaster_id | integer |           | not null | 
Indexes:
    "favorites_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "favorites_user_id_fkey" FOREIGN KEY (user_id) REFERENCES accounts(id)