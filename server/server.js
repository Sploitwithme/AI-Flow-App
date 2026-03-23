const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error:", err));

// Model
const Prompt = mongoose.model("Prompt", {
  prompt: String,
  response: String,
});

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// AI Route
app.post("/api/ask-ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://your-site.com", // ✅ important
          "X-Title": "AI Flow App",               // ✅ important
        },
      }
    );

    res.json({
      response: response.data.choices[0].message.content,
    });

  } catch (error) {
    console.log("FULL ERROR:", error.response?.data || error.message); // 🔥 IMPORTANT
    res.status(500).json({ error: "AI failed" });
  }
});

// Save Route
app.post("/api/save", async (req, res) => {
  try {
    const { prompt, response } = req.body;

    const newData = new Prompt({ prompt, response });
    await newData.save();

    res.json({ message: "Saved" });
  } catch (err) {
    res.status(500).json({ error: "Save failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});