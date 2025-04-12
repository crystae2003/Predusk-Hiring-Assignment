const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Get API key from environment variables
const API_KEY = process.env.TOGETHER_API_KEY;

if (!API_KEY) {
  console.error('TOGETHER_API_KEY is not set in environment variables');
  process.exit(1); // Exit if key is missing (helpful for local testing)
}

// Define the chatbot endpoint
app.post('/chatbot', async (req, res) => {
  // Explicitly check for POST method to avoid 405
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Validate the request body
  const userMessage = req.body?.message;
  if (!userMessage || typeof userMessage !== 'string' || userMessage.trim() === '') {
    return res.status(400).json({ error: 'A valid message is required' });
  }

  const togetherApiUrl = 'https://api.together.xyz/v1/chat/completions';

  try {
    const response = await axios.post(
      togetherApiUrl,
      {
        model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
        messages: [
          {
            role: "user",
            content: userMessage.trim(),
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.data.choices || !response.data.choices[0]?.message?.content) {
      throw new Error('Invalid response from TogetherAI');
    }

    res.status(200).json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error calling TogetherAI API:', error.message);
    if (error.response) {
      console.error('TogetherAI Error Details:', error.response.data);
      return res.status(500).json({ error: 'Error processing your request with TogetherAI' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the serverless-wrapped app
module.exports = serverless(app);