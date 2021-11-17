import './App.css';
import React from "react";
import Navbarapp from "@ai-components-navbar";
import Box from "@ai-components-transbox"

function App() {
  return (
    <div
      // className="d-flex justify-center align-items"
      style={{ backgroundColor: "LightGray" , height: '150vh'}}
    >
      <Navbarapp/>
      <Box/>
    </div>
  );
}

export default App;
