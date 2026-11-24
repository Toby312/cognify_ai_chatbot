from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from openai import OpenAIError

from app.services.ai_service import generate_response


router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"]
)


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=10000)
    history: list[Message] = Field(default_factory=list)


class ChatResponse(BaseModel):
    reply: str


@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):

    try:
        reply = await generate_response(
            message=request.message,
            history=request.history
        )

        return ChatResponse(reply=reply)

    except OpenAIError:
        raise HTTPException(
            status_code=502,
            detail="Unable to generate a response. Please try again."
        )