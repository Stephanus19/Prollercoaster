steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE favorites (id SERIAL PRIMARY KEY NOT NULL, user_id INTEGER NOT NULL REFERENCES accounts("id"), rollercoaster_id INTEGER NOT NULL);
        """,
        # "Down" SQL statement
        """
        DROP TABLE favorites;
        """
    ],
]
