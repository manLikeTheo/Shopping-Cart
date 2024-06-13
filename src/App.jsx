import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-slate-500 font-bold font-green">
        Shopping Cart Project
      </h1>
    </>
  );
}

export default App;
