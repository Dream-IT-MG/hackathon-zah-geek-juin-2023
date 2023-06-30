from django.contrib.auth.models import User
from django.core.handlers.wsgi import WSGIRequest

# from ninja.errors import HttpError
# from ninja_extra.router import Router
from ninja_jwt.authentication import JWTAuth

from ninja import Schema, Router
from pydantic import parse_obj_as  # pylint: disable=no-name-in-module


from helpers.schema import ErrorSchema

# from authentication.schemas import UserOut, UserIn, RegisterSchema
# from authentication.services import register_user
# from authentication.exceptions import DuplicateUser


class UserSchema(Schema):
    username: str


class UserOutSchema(UserSchema):
    id: int


class UserInSchema(UserSchema):
    password: str


class RegisterSchema(UserInSchema):
    first_name: str
    last_name: str
    confirm_password: str


router = Router()


@router.get("/whoami", auth=JWTAuth(), response=UserOutSchema)
def whoami(request: WSGIRequest):
    return request.user


@router.post("/register", response={201: UserOutSchema, 400: ErrorSchema})
def register(request: WSGIRequest, payload: RegisterSchema):
    try:
        User.objects.get(username=payload.username)
        return 400, {"message": f"L'utilisateur {payload.username} existe déja"}
    except User.DoesNotExist:
        if payload.password == payload.confirm_password:
            user = User.objects.create_user(
                username=payload.username,
                password=payload.password,
                email=payload.username,
                first_name=payload.first_name,
                last_name=payload.last_name,
            )
            return 201, user
        else:
            return 400, {"message": "Les mots de passe de correspondent pas"}
