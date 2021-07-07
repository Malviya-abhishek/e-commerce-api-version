# **API**

> permission level specify the control that a user have on API
like a seller can only post products on the api

## User methods

| METHOD | ROUTE |
| ------ | ------ |
| POST | /users |
| GET | /users/:userId |
| PATCH | /users/:userId |
| DELETE | /users/:userId |

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


## Authentication methods

| METHOD | ROUTE |
| ------ | ------ |
| POST | /auth |
| POST | /auth/refresh |

### Post method "/auth"
*Sample request*
```sh
{
    "email":"email@email.email",
    "password": "password_password"
}
```
*Sample response*
```sh
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGUxNWMxZTExYTFiNjFmOGE4ODdjNGEiLCJlbWFpbCI6InF3ZUBxd2UuY29tIiwicGVybWlzc2lvbkxldmVsIjoxLCJwcm92aWRlciI6ImVtYWlsIiwibmFtZSI6IkpvbWEgSmFrZSIsInJlZnJlc2hLZXkiOiJETFNjNmSzlWOFczYXFya0Naa3pRPT0iLCJpYXQiOjE2MjU1ODkxNjl9.P7DxN1F1t34GV0IMNfM1nHWygFIfLe1jCU9KjdMnq4k",
    "refreshToken": "Y1dlc0krVDMxdGlCVk1rQ09nZVFRbmVVdEJhR2pNTGl3pGUUszNFJBNm5maE9jVk5JTUp3cE9sNXl0QzQvQXFyNmFZbVFlQnp1RFJka0QwVGNDREE9PQ=="
}
```
### GET method "/auth/refresh"
*Need JWT token as a bearer*
> Similar as /auth

# This API is created around the idea of selling books, so this following method is called book but it can used for all kind of products.  

## Book methods

| METHOD | ROUTE |
| ------ | ------ |
| GET | /books |
| POST | /books |
| GET | /books/:bookId |
| PATCH | /books/:bookId |
| DELETE | /books/:bookId |

### GET method "/books"
*Sample request*
> localhost:3000/books?limit=20&page=1
limit and page are optional. 

*Sample response*
```sh
[
    {
        "tags": [
            "partnerships",
            "Multi-tiered",
            "initiatives",
            "Vision-oriented"
        ],
        "name": "Fantastic Concrete Chair",
        "image": "http://placeimg.com/640/480/nature",
        "description": "Kenya Baby Falls Berkshire",
        "price": 600,
        "sellerId": "60e1efdf97eb4dd170399bc1",
        "id": "60e206d4e21ae1ee9cead1bd"
    },
    {
        "tags": [
            "Generic",
            "engineer",
            "Illinois",
            "calculating"
        ],
        "name": "Practical Cotton Ball",
        "image": "http://placeimg.com/640/480/nature",
        "description": "Avon hacking",
        "price": 466,
        "sellerId": "60e1efdf97eb4dd170399bc1",
        "id": "60e206d5e21ae1ee9cead1bf"
    }
]
```

### POST method "/books"
> User of this method require permission level of 4 and Bearer token

*Sample request*
```sh
{
    "name":"{{$randomProductName}}",
    "image":"{{$randomNatureImage}}",
    "description":"{{$randomWords}}",
    "price":"{{$randomInt}}",
    "tags":[ "{{$randomWord}}", "{{$randomWord}}", "{{$randomWord}}", "{{$randomWord}}" ]
}
```
*Sample response*
```sh
{
    "id": "60e48955d90156527f3431a6"
}
```
### GET method "/books/:bookId
> Return information about a particular book 
> localhost:3000/book/60e48955d90156527f3431a6

*Sample Response*
```sh
{
        "tags": [
            "partnerships",
            "Multi-tiered",
            "initiatives",
            "Vision-oriented"
        ],
        "name": "Fantastic Concrete Chair",
        "image": "http://placeimg.com/640/480/nature",
        "description": "Kenya Baby Falls Berkshire",
        "price": 600,
        "sellerId": "60e1efdf97eb4dd170399bc1",
        "id": "60e206d4e21ae1ee9cead1bd"
}
```

## Order methods

| METHOD | ROUTE |
| ------ | ------ |
| POST | /orders |
| POST | /orders/:orderId |

### POST orders
*Sample order*
```sh
{
    "books": [
        {
            "qty": "{{$randomInt}} ",
            "bookId": "60e206dce21ae1ee9cead1cb"
        },
        {
            "qty": "{{$randomInt}}",
            "bookId": "60e2a432067b7e1ba5942bbc"
        },
        {
            "qty": "{{$randomInt}}",
            "bookId": "60e353cd76216bd3b8fb0649"
        }
        
    ],
    "phone":"{{$randomPhoneNumber}}",
    "address":"{{$randomStreetAddress}}",
    "paymentType":"COD"
}
```

*Sample resopnse*
```sh
{
    "orderId": [
        "60e491cbd90156527f3431ab",
        "60e491cbd90156527f3431ae"
    ]
}
```