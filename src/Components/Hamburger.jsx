/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Hamburger = ({setHamburger,hamburger}) => {
  return (
    <ul className="fadeIn mt-4 mx-8 p-2 rounded-lg flex flex-col justify-center items-center w- bg-slate-300 gap-4 text-slate-800 font-semibold">
      <li onClick={() => setHamburger(!hamburger)}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={() => setHamburger(!hamburger)}>
        <Link to="/about">About</Link>
      </li>
      <li onClick={() => setHamburger(!hamburger)}>
        <Link to="/products">Products</Link>
      </li>
      <li onClick={() => setHamburger(!hamburger)}>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  );
};

export default Hamburger;
