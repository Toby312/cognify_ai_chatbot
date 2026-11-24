from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import chat


app = FastAPI(
    title="Cognify API",
    description="Backend API for the Cognify AI chatbot",
    version="1.0.0"
)


# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Register routes
app.include_router(chat.router)


@app.get("/")
async def root():
    return {
        "message": "Welcome to Cognify API",
        "status": "running"
    }


@app.get("/health")
async def health_check():
    return {
        "status": "healthy"
    }