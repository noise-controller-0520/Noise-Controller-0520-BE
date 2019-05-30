# Noise Controller Backend


## End Points:

### To register a new user

post('/auth/register', object)

object = {
    username(required),
    password(required),
    first_name(optional),
    last_name(optional),
    email(optional)
}

example:

{
    "username": "user",
    "password": "pass",
    "first_name": "John",
    "last_name": "Doe",
    "email": "user@lambda.dev"
}

### To Login

post('/auth/login', object)

object = {
    username(required),
    password(required)
}

example:

{
    "username": "user",
    "password": "pass"
}