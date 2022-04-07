# Project: Chapter 04

## End-point: login

### Method: POST

> ```
> http://127.0.0.1:3000/login
> ```

### Body (**raw**)

```json
{
  "username": "admin",
  "password": "admin"
}
```

### Response: 200

```json
"9e50ab39-8f99-4333-b2b4-8b6344bd23b6:admin"
```

### Response: 401

```json
{
  "message": "Invalid username or password"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: users

### Method: GET

> ```
> http://127.0.0.1:3000/users
> ```

### Headers

| Content-Type  | Value                                      |
| ------------- | ------------------------------------------ |
| Authorization | 9e50ab39-8f99-4333-b2b4-8b6344bd23b6:admin |

### Response: 200

```json
[
  {
    "publicId": "9e50ab39-8f99-4333-b2b4-8b6344bd23b6",
    "username": "admin"
  },
  {
    "publicId": "0624dd13-627e-4adc-b7a0-9aeb83ecfe26",
    "username": "LeslieMoen_OConn"
  },
  {
    "publicId": "62c8ee91-b826-4e40-9251-40fa7e2fa7ba",
    "username": "AgnesKessler23"
  },
  {
    "publicId": "2d0ca2a9-e58d-4ae4-86d6-c5703f8a6b68",
    "username": "TraceyFadel66"
  },
  {
    "publicId": "a874c301-3a69-4ce4-92ca-2a2067ea1f93",
    "username": "ErikAbshire_Hami"
  },
  {
    "publicId": "e6f6a4b3-8ba3-41b2-a48a-0f58571f0996",
    "username": "ClarenceSauerV60"
  },
  {
    "publicId": "f2c494ef-5ba8-44f2-b0c4-86db3de23aad",
    "username": "ConradNikolaus_S"
  },
  {
    "publicId": "88799eeb-c36c-45b8-85e6-a34e4b837bfa",
    "username": "WayneMayer6"
  },
  {
    "publicId": "28d74f6a-8428-4a57-bb2a-e68eb4a297d9",
    "username": "MathewSanfordMD5"
  },
  {
    "publicId": "a534a589-f40e-4623-ab8e-4b0abaa10420",
    "username": "MissHughBahringe"
  },
  {
    "publicId": "da54f6a4-fe5e-418f-848a-5fcc6223edbb",
    "username": "BerthaHane83"
  },
  {
    "publicId": "325bc52f-b94a-40df-a732-f0b0fa889b06",
    "username": "AndreaGoyette90"
  },
  {
    "publicId": "5a1e54dc-8eea-4a10-8aa4-862a97eb528e",
    "username": "SandyGlover77"
  },
  {
    "publicId": "befbbff6-4284-49a3-976d-00324cf34793",
    "username": "VictorPouros_Hau"
  },
  {
    "publicId": "bb4bdbf9-587e-4085-aa50-a25dc96977a7",
    "username": "MicheleBartell.M"
  },
  {
    "publicId": "853b01bc-ad9f-4c8b-afa7-fce137c45664",
    "username": "LorenaBashirian5"
  },
  {
    "publicId": "a930818f-9a17-40b1-80b4-9db612ef8d58",
    "username": "GuillermoGrimes."
  },
  {
    "publicId": "47a95184-4e7d-4a96-b65c-8cb20c026b9b",
    "username": "LeighKilback.Abs"
  },
  {
    "publicId": "f0623fb8-b303-4cde-ad93-068e1a3834c4",
    "username": "DianneDeckow.Spo"
  },
  {
    "publicId": "60324f98-c9f4-4656-9fe6-dc8e1f215cc0",
    "username": "AlexBrown_Kshler"
  },
  {
    "publicId": "ef30842a-d9bc-4f18-b1e0-c1713a84e138",
    "username": "GeoffreyCremin.C"
  }
]
```

### Response: 401

```json
{
  "message": "Unauthorized User"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: users/:id

### Method: GET

> ```
> http://127.0.0.1:3000/users/:id
> ```

### Headers

| Content-Type  | Value                                      |
| ------------- | ------------------------------------------ |
| Authorization | 9e50ab39-8f99-4333-b2b4-8b6344bd23b6:admin |

### Response: 200

```json
{
  "publicId": "9e50ab39-8f99-4333-b2b4-8b6344bd23b6",
  "username": "admin",
  "UserGameBiodatum": {
    "name": "Delbert Hansen",
    "age": 27
  }
}
```

### Response: 401

```json
{
  "message": "Unauthorized User"
}
```

### Response: 401

```json
{
  "message": "User not found"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: users

### Method: POST

> ```
> http://127.0.0.1:3000/users
> ```

### Headers

| Content-Type  | Value                                      |
| ------------- | ------------------------------------------ |
| Authorization | 9e50ab39-8f99-4333-b2b4-8b6344bd23b6:admin |

### Body (**raw**)

```json
{
  "username": "adigege",
  "password": "adigege"
}
```

### Response: 200

```json
{
  "message": "Success add user"
}
```

### Response: 401

```json
{
  "message": "Unauthorized User"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: users/:id

### Method: DELETE

> ```
> http://127.0.0.1:3000/users/:id
> ```

### Headers

| Content-Type  | Value                                      |
| ------------- | ------------------------------------------ |
| Authorization | 9e50ab39-8f99-4333-b2b4-8b6344bd23b6:admin |

### Response: 200

```json
{
  "message": "Success delete user"
}
```

### Response: 401

```json
{
  "message": "Unauthorized User"
}
```

### Response: 404

```json
{
  "message": "User not found"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: users/:id

### Method: PUT

> ```
> http://127.0.0.1:3000/users/:id
> ```

### Headers

| Content-Type  | Value                                      |
| ------------- | ------------------------------------------ |
| Authorization | 9e50ab39-8f99-4333-b2b4-8b6344bd23b6:admin |

### Body (**raw**)

```json
{
  "password": "LutherPacocha_Ki"
}
```

### Response: 200

```json
{
  "message": "Success update password user"
}
```

### Response: 404

```json
{
  "message": "User not found"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
