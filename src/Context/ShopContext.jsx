import React, { createContext, useEffect, useState, useContext } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [shopProducts, setShopProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_Endpoint = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_Endpoint, { mode: "cors" });
        if (!response.ok || response.status >= 400) {
          throw new Error(`HTTP Error: Status ${response.status}`);
        }
        const data = await response.json();
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
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Network error encountered</p>;

  return (
    <ShopContext.Provider value={{ shopProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => {
  return useContext(ShopContext);
};

export { ShopProvider, useShopContext };
