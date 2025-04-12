import React, { useState, useEffect, useRef } from 'react';
import { FaComment, FaPaperPlane, FaRegCommentAlt } from 'react-icons/fa'; // Import necessary icons
import './Chatbot.css'; // Import the CSS file

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // To show loading state

  const messagesEndRef = useRef(null); // Ref for scrolling to bottom

  // Function to scroll to the bottom of the chat messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    if (isOpen) {
        // Timeout allows the animation to start before scrolling
        setTimeout(scrollToBottom, 50);
    }
  }, [isOpen])


  const sendMessage = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    const newUserMessage = { sender: 'user', text: trimmedMessage };
    setChat(prevChat => [...prevChat, newUserMessage]);
    setMessage('');
    setIsLoading(true); 

    try {
      
      // await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`${REACT_APP_BACKEND_URL}/chatbot`);
      const response = await fetch(`${REACT_APP_BACKEND_URL}/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmedMessage }) // Send trimmed message
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      

      setChat(prevChat => [...prevChat, { sender: 'bot', text: data.reply }]);

    } catch (error) {
      console.error('Error sending message:', error);
      setChat(prevChat => [...prevChat, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { 
      e.preventDefault(); 
      sendMessage();
    }
  };

  return (
    <>
      
      <button
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <FaComment />
        Ask Me
      </button>

      {/* Chat Window */}
      <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-content">
             <FaRegCommentAlt className="chat-header-icon" /> 
             <div className="chat-header-text">
               <h3>How can we help?</h3> 
               
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="close-button" aria-label="Close chat">
            &mdash; {/* Minimize style button */}
          </button>
        </div>

        {/* Messages Area */}
        <div className="chat-messages">
          {chat.length === 0 ? (
            <div className="initial-message">
              👋 
              <br/>
              Ask Me Anything
              <br/>
              About Hemlata Gautam!
            </div>
          ) : (
            chat.map((c, index) => (
              <div key={index} className={`message ${c.sender}`}>
                <div className="message-bubble">
                  {c.text}
                </div>
              </div>
            ))
          )}
          {/* Optional: Loading indicator */}
          {isLoading && (
             <div className="message bot">
                <div className="message-bubble"><i>Typing...</i></div>
             </div>
          )}
          {/* Dummy div to ensure scroll stays at bottom */}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chat-input-area">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write a message..."
            aria-label="Chat message input"
            disabled={isLoading} // Disable input while loading
          />
          <button
            onClick={sendMessage}
            className="send-button"
            aria-label="Send message"
            disabled={!message.trim() || isLoading} // Disable if no message or loading
          >
            <FaPaperPlane /> {/* Send Icon */}
          </button>
        </div>

         {/* Footer */}
         <div className="chat-footer">
            Powered by <a href="https://www.together.ai/" target="_blank" rel="noopener noreferrer">Together.AI</a>
         </div>
      </div>
    </>
  );
};

export default Chatbot;