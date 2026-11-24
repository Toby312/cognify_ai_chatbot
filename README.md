# Cognify AI Chatbot 🤖

Cognify is a general-purpose AI chatbot built with Python, FastAPI, React, and TypeScript. It uses the OpenAI API to generate intelligent responses and maintain contextual conversations.

The project is being developed with a modular architecture, with plans to introduce persistent conversation storage, user authentication, and additional AI-powered capabilities.

## ✨ Features

- AI-powered conversational responses.
- Context-aware conversations (short-term memory).
- React-based chat interface.
- FastAPI backend.
- Modular and scalable project architecture.
- API integration between frontend and backend.
- Loading states and error handling.

## 🛠️ Tech Stack

### Backend
- Python
- FastAPI
- OpenAI API
- Pydantic
- Uvicorn
- python-dotenv

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

### Planned Technologies
- PostgreSQL
- SQLAlchemy
- Alembic

## 📁 Project Structure

```text
cognify/
│
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   └── config.py
│   │   ├── routes/
│   │   │   └── chat.py
│   │   ├── services/
│   │   │   └── ai_service.py
│   │   └── main.py
│   │
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── index.css
│   │
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Python 3.10+
- Node.js and npm
- Git
- An OpenAI API key

### 1. Clone the repository

```bash
git clone https://github.com/Toby312/cognify_ai_chatbot
cd cognify
```

### 2. Set up the backend

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate the environment:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file in the backend directory:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=your_preferred_model
```

Start the backend server:

```bash
python -m uvicorn app.main:app --reload
```

The backend will run at:

`http://localhost:8000`

API documentation:

`http://localhost:8000/docs`

### 3. Set up the frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000
```

Start the development server:

```bash
npm run dev
```

The frontend will usually be available at:

`http://localhost:5173`

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/health` | Backend health check |
| POST | `/api/chat/` | Generate an AI response |

### Chat Request Example

```json
{
  "message": "What is artificial intelligence?",
  "history": [
    {
      "role": "user",
      "content": "Tell me about AI."
    },
    {
      "role": "assistant",
      "content": "AI refers to..."
    }
  ]
}
```

### Chat Response Example

```json
{
  "reply": "Artificial intelligence is..."
}
```

## 🧠 Conversation Memory

Cognify currently supports short-term conversation memory.

Previous messages are sent alongside new messages to provide conversational context to the AI model.

Conversation history is currently maintained in frontend application state. Persistent database storage is planned for a future development phase.

## 🚀 Roadmap

- [x] Initialize FastAPI backend.
- [x] Integrate OpenAI API.
- [x] Build React frontend.
- [x] Connect frontend to backend.
- [x] Implement short-term conversation memory.
- [ ] Integrate PostgreSQL.
- [ ] Implement persistent chat history.
- [ ] Support multiple conversations.
- [ ] Add user authentication.
- [ ] Implement streaming AI responses.
- [ ] Improve UI and user experience.
- [ ] Deploy the application.

## 🔐 Environment Variables

Keep your API credentials private.

Never commit `.env` files or expose your OpenAI API key in the frontend.

Make sure `.env` is included in `.gitignore`.

## 📌 Project Status

Cognify is currently under active development.

The initial backend, frontend, AI integration, and short-term conversation memory are functional. Further improvements and features will be introduced as development progresses.

## 👨‍💻 Author

Developed as a personal AI application project.

---

**Cognify — Think. Ask. Discover.**