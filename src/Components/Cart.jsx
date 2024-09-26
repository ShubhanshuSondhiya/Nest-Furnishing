/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import { myContext } from "../App";
import emptyCartImage from "../assets/Empty_cart.jpeg";
import { Link } from "react-router-dom";

function Cart() {
  const { loggedIn, cart, removeFromCart,subTotal, setSubTotal,tax, setTax, total, setTotal} = useContext(myContext);

  useEffect(() => {
    const newSubTotal = cart.reduce((total, item) => {
      return total + (item.attributes.price / 100) * item.quantity;
    }, 0);

    const newTax = newSubTotal * 0.1;
    const newTotal = newSubTotal + newTax + 5;

    setSubTotal(newSubTotal);
    setTax(newTax);
    setTotal(newTotal);
  }, [cart]);

  return (
    <div className="mt-16 mb-20 w-11/12 sm:w-4/5 mx-auto my-auto">
      <h2 className="text-4xl my-4">Shopping Cart</h2>
      <hr className="border-gray-300 mb-8" />

      {cart.length === 0 ? (
        <div className="fadeIn text-center">
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="w-72 mx-auto my-8"
          />
          <p className="text-2xl">Your cart is empty!</p>
        </div>
      ) : (
        <div className="lg:flex justify-between">
          <div className="fadeInLeft w-full lg:w-3/4">
            {cart.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-3 sm:grid-cols-4 place-items-start">
                  <img
                    className="w-12 h-12 sm:w-20 sm:h-20 lg:w-28 object-cover rounded-lg"
                    src={item.attributes.image}
                    alt=""
                  />
                  <div>
                    <p className="capitalize text-sm sm:text-base">
                      {item.attributes.title}
                    </p>
                    <p className=" text-sm sm:text-base">
                      {item.attributes.company}
                    </p>
                  </div>
                  <div className=" ">
                    <p className="text-sm sm:text-base">Amount</p>
                    <p className="text-center text-xs sm:text-base">
                      {item.quantity}
                    </p>
                    <button
                      onClick={(e) => removeFromCart(e, item)}
                      className="text-blue-700"
                    >
                      remove
                    </button>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base">
                      ${(item.attributes.price / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
                <hr className="border-gray-300 m-3" />
              </div>
            ))}
          </div>
          <div className="drop-in w-full lg:size-64 xl:size-80">
            <div className="bg-slate-200 rounded-lg p-4">
              <div className="flex justify-between py-1">
                <p>Subtotal</p>
                <p>${subTotal.toFixed(2)}</p>
              </div>
              <hr className="border-gray-400" />
              <div className="flex justify-between py-1">
                <p>Shipping</p>
                <p>$5.00</p>
              </div>
              <hr className="border-gray-400" />
              <div className="flex justify-between py-1">
                <p>Tax</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <hr className="border-gray-400" />
              <div className="flex justify-between py-2 text-lg">
                <p>Order Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            {loggedIn ? (
              <Link to="/checkout">
                <button className="mt-4 w-full lg:w-64 xl:w-80 text-white text-center bg-blue-500 rounded-lg h-10">
                  Proceed to Checkout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="mt-4 w-full lg:w-64 xl:w-80 text-white text-center bg-blue-500 rounded-lg h-10">
                  Please Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
