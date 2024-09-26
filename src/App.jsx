import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserDashboard from "./Components/UserDashboard";
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { onAuthStateChanged } from "firebase/auth";
import Checkout from "./Components/Checkout";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";

// eslint-disable-next-line react-refresh/only-export-components
export const myContext = createContext();

export default function App() {
  const [user] = useAuthState(auth);
  const [loggedIn,setLoggedIn] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const [cart, setCart] = useState(
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is already logged in:", user);
        setLoggedIn(true);
      } else {
        console.log("User is logged out.");
        setLoggedIn(false);
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function incQuantity() {
    setQuantityToAdd(quantityToAdd + 1);
  }
  function decQuantity() {
    if (quantityToAdd > 1) setQuantityToAdd(quantityToAdd - 1);
    else setQuantityToAdd(1);
  }

  function addToCart(e, prod) {
    const existingProduct = cart.find((item) => item.id === prod.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === prod.id
          ? { ...item, quantity: item.quantity + quantityToAdd }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...prod, quantity: quantityToAdd }]);
    }
  }

  function removeFromCart(e, prod) {
    const existingProduct = cart.find((item) => item.id === prod.id);
    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCart(updatedCart);
      } else {
        const updatedCart = cart.filter((item) => item.id !== prod.id);
        setCart(updatedCart);
      }
    }
  }
  -useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://strapi-store-server.onrender.com/api/products`
      );
      const result = await response.json();
      console.log(result);
      setProducts(result.data);
    }
    getData();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" transition={Slide} autoClose={1000} />
      <myContext.Provider
        value={{
          subTotal,
          setSubTotal,
          tax,
          setTax,
          total,
          setTotal,
          user,
          loggedIn,
          setLoggedIn,
          products,
          setProducts,
          addToCart,
          cart,
          removeFromCart,
          quantityToAdd,
          incQuantity,
          decQuantity,
          setQuantityToAdd,
          currentPage,
          setCurrentPage,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orders" element={<Orders />} />
          <Route path="userDashboard" element={<UserDashboard />} />
          <Route path="/products" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </myContext.Provider>
    </BrowserRouter>
  );
}
