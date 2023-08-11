import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/Icons/logo.svg" className="App-logo" alt="logo" />
        <p>This is just a test.</p>
        <a
          className="App-link"
          href="https://github.com/goldbergyoni/nodebestpractices"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Github
        </a>

        <button color="red">This is a button</button>
      </header>
    </div>
  );
}

export default App;
