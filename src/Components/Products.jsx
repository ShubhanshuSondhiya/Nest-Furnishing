import { useContext } from "react";
import { myContext } from "../App";
import "../App.css";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { toast } from "react-toastify";

function Products() {
  const { products, addToCart } = useContext(myContext);

  return (
    <div>
      <div className="drop-in p-10 xl:p-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-auto justify-items-center text-center gap-12">
        {products.map((prod, index) => {
          return (
            <div className="card p-4 rounded-xl" key={index}>
              <Link to={`/products/${prod.id}`}>
                <img
                  className="rounded-xl w-80 h-52 object-cover my-4"
                  src={prod.attributes.image}
                  alt=""
                />
              </Link>
              <Link to={`/products/${prod.id}`}>
                <h1>{prod.attributes.title}</h1>
              </Link>
              <p className="mb-2">${prod.attributes.price / 100}</p>
              <button
                onClick={(e) => {addToCart(e, prod);toast.success("Item Added To Cart");}}
                className="text-sm bg-slate-300 p-1 rounded-md"
              >
                Add To Cart
              </button>
              <Link to="/cart">
                <button
                  onClick={(e) => addToCart(e, prod)}
                  className="ml-4 text-sm bg-slate-300 p-1 rounded-md"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default Products;
