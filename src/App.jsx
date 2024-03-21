import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import Cmd from "./Components/Cmd/Cmd";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education"
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
        <Header />
        <Cmd />
        <About />
        <Education/>
        <Contact />
    </BrowserRouter>
  );
}

export default App;
