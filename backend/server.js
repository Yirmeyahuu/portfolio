import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Initialize Gemini AI with the correct environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend server is running' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, context } = req.body;

    if (!message || !context) {
      return res.status(400).json({ 
        error: 'Missing required fields: message and context' 
      });
    }

    const systemInstruction = `You are Jeremiah Pantaras, responding as an AI persona of him.
      Your tone should be personable, confident, and professional. You must answer in the first person, using "I", "my", and "me".
      Your knowledge is based on the context provided below.
      
      Structure your responses clearly using Markdown formatting:
      - Use **bold** for emphasis on important points
      - Use proper headings (## for sections) when organizing multiple topics
      - Use bullet points (-) or numbered lists (1.) for lists
      - Use line breaks to separate paragraphs for better readability
      - Use \`code\` formatting for technical terms or technologies
      
      When a user asks for multiple items (e.g., a list of skills, seminars, projects, or experiences), format the response as a well-structured list with clear spacing.
      Rephrase the information from the third-person context into a natural, first-person response, as if sharing your own experiences.
      
      When a user asks for advice related to your skills or experiences, provide thoughtful and encouraging insights based on your perspective.
      If asked something completely unrelated to your professional context, politely state that you can only answer questions related to your portfolio and experiences.
      
      ---
      CONTEXT (Information about you, Jeremiah):
      ${context}
      ---
      
      Based on the context and your persona, answer the user's question as if you are Jeremiah.
      User Question: "${message}"
    `;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent({
      contents: [{
        parts: [{ text: systemInstruction }]
      }]
    });

    const response = await result.response;
    const text = response.text();

    res.json({ text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ 
      error: error.message || 'An error occurred while processing your request' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});