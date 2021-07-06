# **API**

## User methods

| METHOD | ROUTE |
| ------ | ------ |
| POST | /users |
| GET | /users/:userId |

### Post method "/users"
*Sample request*
```sh
{
    "firstName": "Abhishek",
    "lastName": "Malviya",
    "email":"email@email.email",
    "password": "password_password"
    "permissionLevel": 1                   // optional
}
```
*Sample response*
```sh
{
    "id": "60e425d3d90156527f3431a1"
}
```
### GET method "/users/:userId"
*Need JWT token as a bearer*

```sh
localhost:3000/users/60e15c1e11a1b61f8a887c4a
```
*Sample response*
```sh
{
    "firstName": "Abhishek",
    "lastName": "Malviya",
    "email": "email@email.email",
    "permissionLevel": 1,
    "createdAt": "2021-07-04T06:58:38.338Z",
    "updatedAt": "2021-07-04T06:58:38.338Z",
    "id": "60e15c1e11a1b61f8a887c4a"
}
```

> PUT PATCH DELETE under construction


## Authentication methods

| METHOD | ROUTE |
| ------ | ------ |
| POST | /users |
| GET | /users/:userId |

### Post method "/users"
*Sample request*
```sh
{
    "firstName": "Abhishek",
    "lastName": "Malviya",
    "email":"email@email.email",
    "password": "password_password"
    "permissionLevel": 1                   // optional
}
```
*Sample response*
```sh
{
    "id": "60e425d3d90156527f3431a1"
}
```
### GET method "/users/:userId"
*Need JWT token as a bearer*

```sh
localhost:3000/users/60e15c1e11a1b61f8a887c4a
```
*Sample response*
```sh
{
    "firstName": "Abhishek",
    "lastName": "Malviya",
    "email": "email@email.email",
    "permissionLevel": 1,
    "createdAt": "2021-07-04T06:58:38.338Z",
    "updatedAt": "2021-07-04T06:58:38.338Z",
    "id": "60e15c1e11a1b61f8a887c4a"
}
```

> PUT PATCH DELETE under construction

