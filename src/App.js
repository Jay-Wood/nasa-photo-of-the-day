import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Body from "./components/body.js";


function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Welcome to NASA Photo of the Day</h1>
      </div>
      <Body />
    </div>
  );
}

export default App;
