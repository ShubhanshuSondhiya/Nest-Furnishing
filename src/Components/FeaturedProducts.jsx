import { useContext, useEffect, useState } from "react";
import { myContext } from "../App";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function FeaturedProducts() {
  const { addToCart } = useContext(myContext);
  const [featured,setFeatured] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://strapi-store-server.onrender.com/api/products`
      );
      const result = await response.json();
      console.log(result.data);
      setFeatured(result.data);
    }
    getData();
  }, []);
  const featuredProducts = featured.filter((prod) => {
    return prod.attributes.featured === true;
  });
  return (
    <div className="mb-24">
      <h3 className="text-slate-800 text-center font-extrabold text-3xl">
        Featured Products
      </h3>
      <div className="p-8 lg:px-24 lg:py-14 -my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row justify-items-center text-center gap-12">
        {featuredProducts.map((prod, index) => {
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
              <p>${prod.attributes.price / 100}</p>
              <button
                onClick={(e) => {addToCart(e, prod);
                  toast.success("Item Added To Cart");
                }}
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
    </div>
  );
}

export default FeaturedProducts;
