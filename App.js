import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Assuming your microservice is running locally on port 3000

function App() {
  const [numberId, setNumberId] = useState('p');
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    setNumberId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get($,{"http://20.244.56.144/test/primes":API_URL}/numbers/$,{p});
      setResponse(res.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number ID:
          <input type="text" value={numberId} onChange={handleInputChange} />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <p>Before Numbers: {JSON.stringify(response.beforeNumbers)}</p>
          <p>After Numbers: {JSON.stringify(response.afterNumbers)}</p>
          <p>Average: {response.average}</p>
        </div>
      )}
    </div>
  );
}

export default App;












