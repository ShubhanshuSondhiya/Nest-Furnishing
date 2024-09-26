import { useContext, useEffect } from "react";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const { loggedIn, cart } = useContext(myContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  return (
    <div className="m-4 sm:m-24">
      <h2 className="text-4xl my-4">Your Orders</h2>
      <hr className="border-gray-300 mb-8" />
      <div className=" justify-between">
        <div className="fadeInLeft w-full">
          {cart.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-3 sm:grid-cols-4 place-items-start">
                <img
                  className="w-12 h-12 hidden md:block sm:h-20 lg:w-28 object-cover rounded-lg"
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
                <div>
                  <p className="text-sm sm:text-base">
                    ${(item.attributes.price / 100).toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm sm:text-base">Status: Processing</p>
                </div>
              </div>
              <hr className="border-gray-300 m-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
