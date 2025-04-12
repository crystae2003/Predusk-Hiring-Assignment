// Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Add the user's message to the chat
    setChat([...chat, { sender: 'user', text: message }]);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setChat(prevChat => [...prevChat, { sender: 'bot', text: data.reply }]);
    } catch (error) {
      console.error('Error fetching chatbot reply:', error);
      setChat(prevChat => [...prevChat, { sender: 'bot', text: 'Sorry, there was an error.' }]);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h2>Chatbot Interface</h2>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        height: '300px',
        overflowY: 'scroll',
        backgroundColor: '#f9f9f9'
      }}>
        {chat.map((c, index) => (
          <div key={index} style={{
            margin: '8px 0',
            textAlign: c.sender === 'user' ? 'right' : 'left'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 12px',
              backgroundColor: c.sender === 'user' ? '#DCF8C6' : '#FFF',
              borderRadius: '10px',
              maxWidth: '80%'
            }}>
              {c.text}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px', display: 'flex' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={sendMessage}
          style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
