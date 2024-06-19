import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/HomePage";
import Shop from "./Pages/Shop/Shop";

function App() {
  const [shopProducts, setShopProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const products_Endpoint = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(products_Endpoint, { mode: "cors" });
        if (response.status >= 400) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        setShopProducts(data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    // return () => {
    //   second;
    // };
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Network error encountered</p>;

  return (
    <>
      <Navbar />
      <HomePage />
      {/* <Shop /> */}
    </>
  );
}

export default App;
