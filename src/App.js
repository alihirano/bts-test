import React from "react";
import Checklist from "./components/checklist";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <div className="app">
      <Login />
      <hr />
      <Register />
      <hr />
      <Checklist />
    </div>
  );
}

export default App;
