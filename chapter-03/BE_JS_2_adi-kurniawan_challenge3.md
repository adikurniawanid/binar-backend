# Entity Relationship Diagram (ERD)

![BE_JS_2_adi-kurniawan_challenge3](https://user-images.githubusercontent.com/72638249/159934466-6603b4d4-c3ae-4ac8-885e-abae49663624.png)

```
https://drive.google.com/file/d/12or62N5tmrzaiOsRiYorkO1gqlnwfQHH/view?usp=sharing
```

# Structured Query Language (SQL)

## CREATE DATABASE

```postgresql
CREATE DATABASE "chapter3";
```

## CREATE TABLE

```postgresql
CREATE TABLE user_games
(
    id UUID DEFAULT GEN_RANDOM_UUID() NOT NULL CONSTRAINT user_games_pk PRIMARY KEY,
    username VARCHAR(16) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE user_game_biodatas
(
    user_id UUID DEFAULT GEN_RANDOM_UUID() NOT NULL CONSTRAINT user_game_biodatas_pk PRIMARY KEY CONSTRAINT user_game_biodatas_user_games_id_fk REFERENCES user_games (id) ON UPDATE RESTRICT ON DELETE RESTRICT,
    name VARCHAR(100) NOT NULL,
    age SMALLINT NOT NULL
);

CREATE TABLE user_game_histories
(
    id UUID DEFAULT GEN_RANDOM_UUID() NOT NULL CONSTRAINT user_game_histories_pk PRIMARY KEY,
    user_id UUID NOT NULL CONSTRAINT user_game_histories_user_games_id_fk REFERENCES user_games (id),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP CONSTRAINT validEndTime CHECK (end_time > start_time),
    score BIGINT CONSTRAINT validScore CHECK (score >= 0)
);
```

## INSERT DATA

```postgresql
-- insert user aja
INSERT INTO user_games (username, password) VALUES
('adigege21', '1ee6587d2486ef1bb94fb1a8f35f472b988d7fe4f9494b62bb09c6c2f16b'),
('gegewepegemer', 'fa0ce6e2a013927f28f930035e192758eaa9f3827c63ed6ac0f99195e1b8'),
('beautysersi', '9596204bb84fdbf2d8c27546395897a487f932e6f5ea6894142df4846ded'),
('stevecapt', '1ee6587d2486ef1bb94fb1a8f35f472b988d7fe4f9494b62bb09c6c2f16b');

-- insert user dengan biodata sekaligus
DO $$
DECLARE
    var_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO user_games (id, username, password) VALUES
    (var_id, 'stevecaptain', '8c098f4c9808f60c83cd8959a7de85cc7c58c62dab821470366387bc4216');
    INSERT INTO user_game_biodatas (user_id, name, age)  VALUES
    (var_id, 'Steve Rogers', 21);
END$$;
```

## READ DATA

```postgresql
SELECT * FROM user_games
WHERE deleted_at IS NULL
```

## UPDATE DATA

```postgresql
UPDATE user_games
SET password = '9596204bb84fdbf2d8c27546395897a487f932e6f5ea6894142df4846ded',
updated_at = now()
WHERE id = 'b522d35b-05dc-4a23-8958-6e1832afc61d'
AND password = 'old_password';
```

## DELETE DATA

```postgresql
-- soft delete
UPDATE user_games
SET deleted_at = now()
WHERE id = 'b522d35b-05dc-4a23-8958-6e1832afc61d'

-- hard delete
DO $$
BEGIN
DELETE FROM user_game_biodatas
WHERE user_id = 'b522d35b-05dc-4a23-8958-6e1832afc61d';
DELETE FROM user_games
WHERE id = 'b522d35b-05dc-4a23-8958-6e1832afc61d';
END
$$;
```
