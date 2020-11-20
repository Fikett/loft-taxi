import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1111

          <Login/>
        </a>
      </header>
    </div>
  );
}

export default App;
