

import './App.css';
import { useEffect, useState } from "react";
import Home from "./components/home";
import About from "./components/about";

function App() {

  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // const handleClick = () => {
  //   setIsVisible(!isAboutVisible);
  // }
  return (
    <div className="App">

      <button
        onClick={() => {
          setIsAboutVisible(!isAboutVisible);
        }}
      >
        Click Me!
      </button>
      {isAboutVisible ? <About /> : <Home />}
    </div >
  );
}

export default App;
