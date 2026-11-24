from openai import AsyncOpenAI
from app.core.config import settings


client = AsyncOpenAI(
    api_key=settings.OPENAI_API_KEY
)


async def generate_response(
    message: str,
    history: list
) -> str:

    conversation = []

    for item in history:
        conversation.append({
            "role": item.role,
            "content": item.content
        })

    conversation.append({
        "role": "user",
        "content": message
    })

    response = await client.responses.create(
        model=settings.OPENAI_MODEL,
        instructions=(
            "You are Cognify, a helpful, intelligent, "
            "and friendly general-purpose AI assistant. "
            "Maintain awareness of the conversation history "
            "and use it to answer follow-up questions. "
            "Provide clear, accurate, and useful responses."
        ),
        input=conversation
    )

    return response.output_text