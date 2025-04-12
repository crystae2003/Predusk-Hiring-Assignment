const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

API_KEY = process.env.TOGETHER_API_KEY;

app.post('/chatbot', async (req, res) => {
  const userMessage = req.body.message;
  const togetherApiUrl = 'https://api.together.xyz/v1/chat/completions';
//   console.log(`User message: ${userMessage}`);
  try {
    const response = await axios.post(
        togetherApiUrl,
          {
            model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
            messages: [
              {
                role: "user",
                content: userMessage,
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error calling together.ai API:', error);
    res.status(500).json({ error: 'Error processing your request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
