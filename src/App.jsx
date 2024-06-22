// import { useState, useEffect, createContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ShopProvider } from "./Context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <Navbar />
      <Outlet />
    </ShopProvider>
  );
}

export default App;
