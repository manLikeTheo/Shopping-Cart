import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useShopContext } from "../../Context/ShopContext";

const Shop = () => {
  const { shopProducts } = useShopContext();

  return (
    <div className="flex flex-col items-center bg-slate-200 min-h-screen w-full">
      <h1 className="text-4xl font-bold my-4 shadow-xl">Products</h1>
      <div className="products-layout p-4 flex flex-wrap gap-4 justify-center">
        {shopProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
