import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import Cmd from "./Components/Cmd/Cmd";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import { BrowserRouter } from "react-router-dom";
import Project from "./Components/Project";
import Alert from "./Components/Alert";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Cmd />
      <About />
      <Project />
      <Education />
      <Contact/>
    </BrowserRouter>
  );
}

export default App;
