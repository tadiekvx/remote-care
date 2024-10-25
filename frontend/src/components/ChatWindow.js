import React, { useState } from 'react';

const ChatWindow = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Handle sending message here
    setMessage('');
  };

  return (
    <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Text Chat</h3>
      <div className="h-64 bg-gray-200 p-4 mb-4 rounded-lg overflow-y-auto">
        {/* Messages will appear here */}
        <p className="text-gray-500 italic">No messages yet</p>
      </div>
      <div className="flex">
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..." 
          className="w-full border px-4 py-2 rounded-md"
        />
        <button 
          onClick={handleSendMessage}
          className="bg-green text-white px-4 py-2 ml-2 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
