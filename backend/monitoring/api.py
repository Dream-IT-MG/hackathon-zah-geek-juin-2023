from ninja import Router, Schema


# Create your views here.


class EchoInSchema(Schema):
    message: str


router = Router()


@router.get("/ping", response={202: dict})
def get_ping(request):
    return 202, {"message": "PONG"}


@router.post("/echo", response={202: dict})
def post_echo(request, echo: EchoInSchema):
    return 202, {"message": echo.message}
