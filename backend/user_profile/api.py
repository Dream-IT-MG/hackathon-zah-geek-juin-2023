from django.contrib.auth.models import User

# from django.core.handlers.wsgi import WSGIRequest
# from ninja.errors import HttpError
# from ninja_extra.router import Router
# from ninja_jwt.authentication import JWTAuth

from ninja import Schema, Router, Field

# from authentication.schemas import UserOut, UserIn, RegisterSchema
# from authentication.services import register_user
# from authentication.exceptions import DuplicateUser

from helpers.schema import ErrorSchema


class UserResponseSchema(Schema):
    id: str
    username: str
    first_name: str
    last_name: str
    email: str
    # contact: str


router = Router()


@router.get("/{user_id}", response={200: UserResponseSchema, 404: ErrorSchema})
def get_user_from_user_id(request, user_id: int):
    try:
        user = User.objects.get(id=user_id)
        return user
    except User.DoesNotExist:
        return 404, {
            "message": f"Impossible de trouver l'utilisateur avec l'id #{user_id}"
        }


# @router.get("/whoami", auth=JWTAuth(), response=UserOut)
# def whoami(request: WSGIRequest):
#     return request.user


# @router.post("/register", response={status.HTTP_201_CREATED: UserOut})
# def register(request: WSGIRequest, payload: RegisterSchema):
#     try:
#         user = register_user(payload)
#         return (status.HTTP_201_CREATED, user)
#     except DuplicateUser as exc:
#         raise HttpError(
#             status.HTTP_400_BAD_REQUEST,
#             "Duplicate User: User with given username already exists",
#         ) from exc
