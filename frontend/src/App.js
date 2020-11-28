import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Header 1">
        <ul>
          <li>Home</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Header 2"/>
    </>
  );
}

export default App;
