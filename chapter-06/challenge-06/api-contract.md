# Game API Contract

## API Contract (13 Mei 2022)

### POST /login/

#### Success

- Body

```json
{
  "username": "admin",
  "password": "admin"
}
```

- Response (200)

```json
{
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNJZCI6IjllNTBhYjM5LThmOTktNDMzMy1iMmI0LThiNjM0NGJkMjNiNiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NTA1NDg3OTl9.B_rvoZwvULTQEKooEG1tcAwnw52fhQvHMss2KshshU4"
  }
}
```

#### Wrong Password

- Body

```json
{
  "username": "admin",
  "password": "admingege"
}
```

- Response (401)

```json
{
  "message": "Invalid username or password"
}
```

#### Wrong Username

- Body

```json
{
  "username": "admingege",
  "password": "admin"
}
```

- Response (401)

```json
{
  "message": "Invalid username or password"
}
```

### GET /users/

### POST /users/

#### Success

- Header

```json
{
  "authorization": "${string}"
}
```

- Body

```json
{
  "username": "akdev",
  "password": "akdev",
  "name": "Adi Kurniawan",
  "age": 22
}
```

- Response (200)

```json
{
  "message": "Success add user"
}
```

#### No Authorization Token

- Header

```json
{}
```

- Body

```json
{
  "username": "akdev",
  "password": "akdev",
  "name": "Adi Kurniawan",
  "age": 22
}
```

- Response (401)

```json
{
  "message": "Unauthorized"
}
```

#### Invalid Authorization Token

- Header

```json
{
  "authorization": "tokenngasal"
}
```

- Body

```json
{
  "username": "akdev",
  "password": "akdev",
  "name": "Adi Kurniawan",
  "age": 22
}
```

- Response (401)

```json
{
  "message": "Unauthorized"
}
```

#### Duplicate Username

- Header

```json
{
  "authorization": "${string}"
}
```

- Body

```json
{
  "username": "admin",
  "password": "admin",
  "name": "admin",
  "age": 22
}
```

- Response (422)

```json
{
  "errors": [
    {
      "username": "Username already in use"
    }
  ]
}
```

#### Required Field Violation

- Header

```json
{
  "authorization": "${string}"
}
```

- Body

```json
{
  "username": "akdev",
  "password": "akdev",
  "age": 22
}
```

- Response (422)

```json
{
  "errors": [
    {
      "name": "name is required"
    }
  ]
}
```

### GET /users/{id}

### PUT /users/{id}

### DELETE /users/{id}
