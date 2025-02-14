import React from "react";
import Lovemessage from "./components/LoveMessage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Click anywhere for a surprise! 💖</h1>
      <Lovemessage />
    </div>
  );
}

export default App;
