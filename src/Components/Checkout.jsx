import { useContext, useEffect } from "react";
import { myContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
const Checkout = () => {
  const { loggedIn, subTotal, tax, total } = useContext(myContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  return (
    <div className="m-12 lg:m-24">
      <h2 className="text-4xl my-4">Place your Order</h2>
      <hr className="border-gray-300 mb-8" />
      <div className="md:flex justify-between">
        <div className="fadeInLeft w-full md:mr-6 lg:w-3/4">
          <h1 className="text-xl mb-4">Shipping Information</h1>
          <div>
            <h1>Full Name</h1>
            <input
              className="my-4 bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
            />
          </div>
          <div>
            <h1>Address</h1>
            <input
              className="my-4 bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
            />
          </div>
        </div>
        <div className="drop-in w-full lg:size-3/6">
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
            <Link to="/orders">
              <button className="mt-4 w-full  text-white text-center bg-blue-500 rounded-lg h-10">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
