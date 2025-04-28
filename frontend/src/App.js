import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/hello`);
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={fetchMessage}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
