# 🚀 AI Flow App

A full-stack MERN application that allows users to input a prompt, generate an AI response, and visualize the flow using React Flow.

---

## ✨ Features

* 🔗 React Flow UI (Input → Output nodes)
* 🤖 AI response using OpenRouter API
* ⚡ Backend with Node.js & Express
* 💾 MongoDB database integration
* ▶️ Run Flow button to generate response
* 💾 Save button to store prompt & response

---

## 🛠️ Tech Stack

* Frontend: React (Vite), React Flow
* Backend: Node.js, Express.js
* Database: MongoDB
* API: OpenRouter AI

---

## 📁 Project Structure

```
ai-flow-app/
│
├── client/        # React frontend
├── server/        # Node backend
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/ai-flow-app.git
cd ai-flow-app
```

---

## 🔹 2. Backend Setup

```
cd server
npm install
```

### Create `.env` file inside `server/`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

### Start Backend

```
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

## 🔹 3. Frontend Setup

Open new terminal:

```
cd client
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔹 4. How to Use

1. Enter your prompt in the **Input Node**
2. Click **Run Flow** → AI response appears in Output Node
3. Click **Save** → stores data in MongoDB

---

## 🌐 Environment Variables

| Variable           | Description                  |
| ------------------ | ---------------------------- |
| MONGO_URI          | MongoDB connection string    |
| OPENROUTER_API_KEY | OpenRouter API key           |
| PORT               | Backend port (default: 5000) |

---

## 📸 Demo

(Add your deployed link here)

---

## 👨‍💻 Author

**Rahul Hiwale**

---

## 📌 Notes

* Make sure MongoDB Atlas cluster is running
* Do not share your `.env` file
* Use `.gitignore` to exclude sensitive data

---
