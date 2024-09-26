import { useContext, useEffect } from "react";
import { myContext } from "../App";

export function Pagination() {
  const { setProducts, currentPage, setCurrentPage } = useContext(myContext);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://strapi-store-server.onrender.com/api/products?page=${currentPage}`
      );
      const result = await response.json();
      console.log(result.data);
      setProducts(result.data);
    }
    getData();
  }, [currentPage,setProducts]);
  console.log(currentPage);

  return (
    <div className="w-full mb-8 flex justify-center items-center gap-4">
      <button
        className="w-10 h-8 bg-gray-800 text-white rounded-md font-bold"
        onClick={() => {
          setCurrentPage(1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        1
      </button>
      <button
        className="w-10 h-8 bg-gray-800 text-white rounded-md font-bold"
        onClick={() => {
            setCurrentPage(2);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
      >
        2
      </button>
      <button
        className="w-10 h-8 bg-gray-800 text-white rounded-md font-bold"
        onClick={() => {
            setCurrentPage(3);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
      >
        3
      </button>
    </div>
  );
}
