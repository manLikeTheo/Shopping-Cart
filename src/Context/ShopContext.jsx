import React, { createContext, useEffect, useState, useContext } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
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

  //Logic for adding items to cart
  const addToCart = (product, quantity) => {
    setCartContent((prevCartContent) => {
      //Find the index of the product in the cart
      const existingProductIndex = prevCartContent.findIndex(
        (item) => item.id === product.id
      );

      //If the product is already in the cart, update the quantity
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCartContent];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        //id product is not in the cart, add it to cart
        return [...prevCartContent, { ...product, quantity }];
      }
    });
  };

  //Remove products from cart
  const removeFromCart = (productId) => {
    console.log("delete product from cart");
  };

  //Update product quantity in cart
  const updateCart = (productId, quantity) => {
    console.log("Update Cart Content");
  };

  if (loading)
    return <p className="text-3xl text-center font-semibold">Loading....</p>;
  if (error)
    return (
      <p className="text-2xl font-semibold text-center">
        Network error encountered
      </p>
    );

  return (
    <ShopContext.Provider
      value={{
        shopProducts,
        cartContent,
        setCartContent,
        addToCart,
        removeFromCart,
        updateCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const useShopContext = () => {
  return useContext(ShopContext);
};

export { ShopProvider, useShopContext };
