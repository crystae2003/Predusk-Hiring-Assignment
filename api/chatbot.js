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
  console.log(`User message: ${userMessage}`);
  console.log(`API Key: ${API_KEY}`);
  try {
    const response = await axios.post(
        togetherApiUrl,
          {
            model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
            messages: [
              {
                role: "system",
                content: `Some data about Hemlata Gautam (me): 
                Section,Title,Details
                Personal Info,Name,Hemlata Gautam
                Personal Info,Phone,+91-8630720244
                Personal Info,Email,2022csb1084@iitrpr.ac.in
                Personal Info,Github,https://github.com/crystae2003
                Personal Info,LinkedIn,https://www.linkedin.com/in/hemlata-gautam
                Personal Info,Codeforces,https://codeforces.com/profile/Hema_24
                Education,B.Tech (CSE),"IIT Ropar, 6.45 CGPA (Till 5th Sem), 2022 - 2026"
                Education,Senior Secondary,"CBSE, 92.8%, 2021"
                Education,Secondary,"CBSE, 94.8%, 2019"
                Experience,ML Internship - IEEE VIP Cup Winner'24,"May 2024 – July 2024, IIT Ropar, Python, Tensorflow, OpenCV; Paper published; 1st global position at ICIP, Abu Dhabi"
                Projects,ADOBE Image Classification,"Dec 2024, 98% accuracy on CIFAKE dataset under FGSM attacks, used Grad-CAM and VLM; GitHub: https://github.com/crystae2003/Adobe-Challenge"
                Projects,GSTN Hackathon,"Sep – Oct 2024, Used RF and XGBoost on 900k records, 97.8% accuracy; GitHub: https://github.com/ankush2005x/GSTN-Public/tree/main"
                Projects,Self-Balancing Robot,"Oct – Dec 2023, Arduino IDE, PID, Bluetooth; GitHub: https://github.com/crystae2003/Self-Balancing-Robot.git"
                Projects,Interactive Web Games,"Jul 2024, Games: Flappy Bird, Parking Zone, Scoreboard; GitHub: https://github.com/crystae2003/Web-Based-Games"
                Projects,Minor Projects,"Sep 2023 – Apr 2024, Spell Checker, RISC-V Assembler, CUCU Compiler"
                Skills,Programming Languages,"C/C++, Python, JavaScript, HTML5, CSS, PL/pgSQL, Java, Flex/Bison, RISC-V Assembly"
                Skills,Libraries/Tools,"TensorFlow-Keras, PostgreSQL, DBeaver, PIL, Numpy, Matplotlib, GitHub, Overleaf, Linux"
                Achievements,IEEE VIP Cup,"1st Place, Global Winner at ICIP Conference, 2024"
                Achievements,Codeforces,"Rating 1244"
                Achievements,Relay Race,"Silver Medal, Aarohan 2023"
                Achievements,Canvas Painting,"8th place, Inter IIT Kharagpur 2023"
                Roles,Art Club Coordinator,"May 2023 – May 2024"
                Roles,Zeitgeist Co-Head,"Oct – Nov 2023"
                Roles,Zeitgeist Art Club Co-Head,"Oct – Nov 2023"
                Courses,ML Specialization,"Stanford by Andrew Ng"
                Courses,CSE,"DSA, Discrete Maths, Programming Paradigms, Computer Architecture"
                `,
              },
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
