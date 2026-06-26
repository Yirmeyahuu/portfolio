import { useState, useRef, useEffect } from 'react';
import { Send, User, X } from 'lucide-react';
import portfolioData from '../data/portfolio-context.json';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Add initial greeting from the bot when the component mounts
    setMessages([
      { 
        text: "Hello there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about me and my experiences in tech. Let me know how I can help!", 
        sender: 'bot' 
      }
    ]);
  }, []);

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

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

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
      ${portfolioContext}
      ---
      
      Based on the context and your persona, answer the user's question as if you are Jeremiah.
      User Question: "${userInput}"
    `;

      const result = await model.generateContent({
        contents: [{
          parts: [{ text: systemInstruction }]
        }]
      });

      const response = await result.response;
      const text = response.text();

      const botMessage = { text: text, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      const errorMessage = { 
        text: `Sorry, I encountered an error: ${error.message}. Please check your connection or API configuration.`, 
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

  // Custom components for ReactMarkdown to style the output
  const markdownComponents = {
    // Paragraphs
    p: ({ children }) => (
      <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>
    ),
    // Headings
    h1: ({ children }) => (
      <h1 className="text-lg font-bold mb-2 mt-4 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-md font-bold mb-2 mt-3 first:mt-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-sm font-bold mb-2 mt-3 first:mt-0">{children}</h3>
    ),
    // Unordered lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-3 space-y-1.5 ml-2">{children}</ul>
    ),
    // Ordered lists
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-3 space-y-1.5 ml-2">{children}</ol>
    ),
    // List items
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    // Strong/Bold
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>
    ),
    // Emphasis/Italic
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    // Code inline
    code: ({ inline, children }) => (
      inline ? (
        <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-[#3a3a3a] rounded text-xs font-mono">
          {children}
        </code>
      ) : (
        <code className="block px-3 py-2 bg-gray-200 dark:bg-[#3a3a3a] rounded text-xs font-mono overflow-x-auto my-2">
          {children}
        </code>
      )
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-3 py-1 my-2 italic text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    // Links
    a: ({ href, children }) => (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </a>
    ),
  };

  return (
    <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:w-96 md:h-[550px] bg-white dark:bg-[#1a1a1a] md:rounded-2xl shadow-2xl flex flex-col md:border border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 ease-in-out">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src="/profile.png" alt="Jeremiah Pantaras" className="w-10 h-10 rounded-full object-cover" />
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-[#1a1a1a]"></span>
          </div>
          <div>
            <h2 className="font-bold text-md text-gray-900 dark:text-white flex items-center gap-1">
              Jeremiah Pantaras
              <span className="inline-flex items-center justify-center relative w-7 h-7">
                <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" aria-label="Verified user">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#1d9bf0"></path>
                </svg>
              </span>
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors cursor-pointer"
        >
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
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-gray-100 dark:bg-[#2a2a2a] text-gray-900 dark:text-white rounded-bl-none'
            }`}>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]} 
                components={markdownComponents}
              >
                {msg.text}
              </ReactMarkdown>
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
          <button 
            onClick={handleSend} 
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105" 
            disabled={isLoading || input.trim() === ''}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;