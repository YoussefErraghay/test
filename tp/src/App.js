import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data); // Update state with fetched data
      });
  }, []);

  return (
    <div className="App">
      <h1>User Data</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Phone:</strong> {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
