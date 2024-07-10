import React, { createContext, useEffect, useState, useContext } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cartContent, setCartContent] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);
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
      //1. Find index of product in cart
      const isProductInCart = prevCartContent.findIndex(
        (item) => item.id === product.id
      );
      //2. If the product is already in the cart, update the quantity
      if (isProductInCart >= 0) {
        const updatedCart = [...prevCartContent];
        updatedCart[isProductInCart].quantity += quantity;
        return updatedCart;
      } else {
        //Add product to cart
        return [...prevCartContent, { ...product, quantity }];
      }
    });
  };

  //Remove products from cart
  const removeFromCart = (productId) => {
    setCartContent((prevCartContent) => {
      return prevCartContent.filter((item) => item.id !== productId);
    });
  };

  //Update product quantity in cart
  const updateCart = (productId, quantity) => {
    setCartContent((prevCartContent) => {
      const updatedCart = prevCartContent.map((item) =>
        //if product is found? update the quantity, else keep the product as is
        item.id === productId ? { ...item, quantity } : item
      );
      return updatedCart;
    });
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
