import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/HomePage";
import Shop from "./Pages/Shop/Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <Shop />
    </>
  );
}

export default App;
