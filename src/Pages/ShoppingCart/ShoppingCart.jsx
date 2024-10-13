import React from "react";
import CheckoutCard from "../../Components/CheckoutCard/CheckoutCard";
import { useShopContext } from "../../Context/ShopContext";

const ShoppingCart = () => {
  const { cartContent } = useShopContext();

  // let newCartContent = [...cartContent];
  // setCartContent(newCartContent);
  let totalCartQuantityAmount = 0;
  cartContent.forEach((item) => {
    parseFloat(
      (totalCartQuantityAmount += item.quantity * item.price.toFixed(2))
    );
  });

  let vat = parseFloat((totalCartQuantityAmount * 0.075).toFixed(2)); //7.5%

  let finalTotalCartAmount = parseFloat(
    (totalCartQuantityAmount + vat).toFixed(2)
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-100 to-slate-300 lg:flex sm:block justify-around items-center gap-6">
      <div className="shopping-cart mb-6 bg-gradient-to-r from-slate-200 to-slate-400 shadow-2xl rounded-xl p-6 sm:p-10 sm:w-full">
        <h1 className="title text-5xl font-bold text-center">Shopping Cart</h1>
        <div className="cart-items">
          {cartContent.length > 0 ? (
            cartContent.map((item) => (
              <CheckoutCard key={item.id} item={item} />
            ))
          ) : (
            <p className="text-3xl font-semibold text-red-600 text-center sm:p-4">
              Your Cart is empty
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col bg-gradient-to-r from-slate-200 to-slate-400 p-10 rounded-lg sm:p-10 sm:mt-8 sm:w-full">
        <h1 className="text-5xl font-extrabold text-slate-900 text-center py-4">
          Order Summary:{" "}
        </h1>
        <div className="total-orders flex flex-col gap-4 border-4">
          <h1 className="total-price text-3xl font-extrabold">
            $ {finalTotalCartAmount}
          </h1>
          <div className="summary text-xl font-semibold text-slate-900">
            <div className="subtotal flex justify-between p-2">
              <p className="subtotal-items">
                Subtotal: {cartContent.length} items
              </p>
              <span className="subtotal-price">
                $ {totalCartQuantityAmount.toFixed(2)}
              </span>
            </div>
            <div className="vat flex justify-between p-2">
              <p className="vat-percent">`VAT ( 7.5 %)`</p>
              <span className="vat-amount">$ {vat}</span>
            </div>

            <div className="cart-total flex  justify-between p-2">
              <p className="total">Total:</p>
              <span className="cart-total-price">$ {finalTotalCartAmount}</span>
            </div>
          </div>
        </div>
        <button className="p-2 bg-blue-600 font-semibold text-lg rounded-md text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
