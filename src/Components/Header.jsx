import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../App.css";
import { useContext, useState } from "react";
import { myContext } from "../App";
import Hamburger from "./Hamburger";
import Logo from "../../public/Logo.png"
function Header() {
  const { user,loggedIn,cart } = useContext(myContext);
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <nav>
        <div className="nav flex justify-between items-center h-14 text-white font-bold">
          <div className="logo ml-2 sm:mx-6">
            <Link to="/">
              <div className="flex items-center">
                <img
                  className="w-8 mr-2 rounded-xl"
                  src={Logo}
                  alt=""
                />
                NEST
              </div>
            </Link>
          </div>
          <ul className="hidden sm:flex gap-6 lg:gap-12 ml-16 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
          <ul className="flex justify-center items-center mx-6 gap-3">
            {loggedIn == true ? (
              <li>
                <Link to="/userDashboard">
                  <button className="text-xs bg-slate-100 text-black p-2 rounded-md hover:bg-teal-700 hover:text-white">
                    {user.displayName || "User"}
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button className="text-xs bg-slate-100 text-black p-2 rounded-md hover:bg-teal-700 hover:text-white">
                    Get Started
                  </button>
                </Link>
              </li>
            )}
            <li>
              <button className="wrapper">
                <Link to="/cart">
                  <FiShoppingCart />
                </Link>
                <span>{cart.length}</span>
              </button>
            </li>
            <li className={`${hamburger ? "hidden" : "block sm:hidden"}`}>
              <button onClick={() => setHamburger(!hamburger)} className="w-4">
                <FaBars />
              </button>
            </li>
            <li className={`${hamburger ? "block sm:hidden" : "hidden"}`}>
              <button onClick={() => setHamburger(!hamburger)} className="w-4">
                <IoClose />
              </button>
            </li>
          </ul>
        </div>
        <div className={`${hamburger ? "" : "hidden"} w-full`}>
          <Hamburger setHamburger={setHamburger} hamburger={hamburger} />
        </div>
      </nav>
    </>
  );
}

export default Header;
