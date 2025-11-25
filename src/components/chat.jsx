import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X } from 'lucide-react';
import portfolioData from '../data/portfolio-context.json';
import ReactMarkdown from 'react-markdown';

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // API key from environment variable
  const GEMINI_API_KEY = import.meta.env.VITE_ABOUTME_AI_PORTFOLIO;

  useEffect(() => {
    // Add initial greeting from the bot when the component mounts
    setMessages([
      { text: "Hello there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about me and my experiences in tech. Let me know how I can help!", sender: 'bot' }
    ]);
  }, []); // Empty dependency array ensures this runs only once

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);
    const portfolioContext = portfolioData.context.join('\n');



    const systemInstruction = `You are Jeremiah Pantaras, responding as an AI persona of him.
      Your tone should be personable, confident, and professional. You must answer in the first person, using "I", "my", and "me".
      Your knowledge is based on the context provided below.
      
      Structure your responses clearly. Use bold text for emphasis.
      When a user asks for multiple items (e.g., a list of skills, seminars, projects, or experiences), you must format the response using bullet points or numbered lists to improve readability. Also, add space between each point.
      Rephrase the information from the third-person context into a natural, first-person response, as if sharing your own experiences.
      
      When a user asks for advice related to your skills or experiences, provide thoughtful and encouraging insights based on your perspective.
      If asked something completely unrelated to your professional context, politely state that you can only answer questions related to your portfolio and experiences.
      
      ---
      CONTEXT (Information about you, Jeremiah):
      ${portfolioContext}
      ---
      
      Based on the context and your persona, answer the user's question as if you are Jeremiah.
      User Question: "${userInput}"
    `;


    try {
      // Call Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: systemInstruction
              }]
            }]
          })
        }
      );

      const data = await response.json();
      
      // Check if the API request itself was not successful
      if (!response.ok) {
        console.error('API Error Response:', data);
        const errorMsg = data?.error?.message || 'An unknown API error occurred.';
        throw new Error(errorMsg);
      }

      // Check for valid candidate response
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const botResponse = data.candidates[0].content.parts[0].text;
        const botMessage = { text: botResponse, sender: 'bot' };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        // Handle cases where response is OK but content is missing (e.g., safety block)
        console.warn('Unexpected API response structure:', data);
        const reason = data.candidates?.[0]?.finishReason || 'No content';
        throw new Error(`API returned no content. Reason: ${reason}`);
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage = { 
        text: `Sorry, I encountered an error: ${error.message}`, 
        sender: 'bot' 
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };


  return (
    <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:w-80 md:h-[500px] bg-white dark:bg-[#1a1a1a] md:rounded-2xl shadow-2xl flex flex-col md:border border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 ease-in-out">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="/profile.png" alt="null" className="w-10 h-10 rounded-full object-cover" />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-[#1a1a1a]"></span>
          </div>
          <div>
            <h2 className="font-bold text-md text-gray-900 dark:text-white flex items-center gap-1">
              Jeremiah P. Pantaras
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'bot' && (
              <img src="/profile.png" alt="Bot Avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
            )}
            <div className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-white rounded-bl-none'}`}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
             {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                <User size={16} className="text-gray-700 dark:text-gray-300"/>
              </div>
             )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end gap-3">
             <img src="/profile.png" alt="Bot Avatar" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
             <div className="max-w-[75%] px-4 py-3 rounded-2xl bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-white rounded-bl-none">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></span>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="w-full pl-4 pr-12 py-3 bg-gray-100 dark:bg-[#2a2a2a] border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-shadow"
            disabled={isLoading}
          />
          <button onClick={handleSend} className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105" disabled={isLoading || input.trim() === ''}>
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;