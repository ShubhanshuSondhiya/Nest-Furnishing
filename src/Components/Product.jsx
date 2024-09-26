import { useContext, useEffect, useState } from "react";
import { myContext } from "../App";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function Product() {
  const {
    products,
    addToCart,
    quantityToAdd,
    incQuantity,
    decQuantity,
    setQuantityToAdd,
  } = useContext(myContext);
  const { id } = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    if (products.length > 0 && id) {
      setProd(products.find((product) => product.id === Number(id)));
    }
  }, [id, products]);

  useEffect(() => {
    return () => {
      setQuantityToAdd(1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      {Object.keys(prod).length > 0 ? (
        <div className="sm:h-[80vh] pt-10 sm:flex m-8 md:m-16 xl:m-10">
          <div className="mb-6 sm:mb-0 ml-auto mr-auto w-full sm:w-64 sm:h-80">
            <img
              className="md:mx-6 rounded-lg w-48 h-52 sm:h-80 sm:w-60 md:w-11/12 md:h-96 object-cover object-center"
              src={prod.attributes.image}
              alt=""
            />
          </div>
          <div className="sm:w-3/5 sm:px-8">
            <h1 className="text-2xl lg:text-4xl text-slate-800 font-bold capitalize">
              {prod.attributes.title}
            </h1>
            <p className="capitalize text-xl text-slate-600 font-semibold my-2">
              {prod.attributes.company}
            </p>
            <p className="font-semibold text-lg my-2">
              ${prod.attributes.price / 100}
            </p>
            <p className="w-full lg:w-5/6 text-justify">{prod.attributes.description}</p>
            <p className="mt-2">Colors : </p>
            <div className="flex">
              {prod.attributes.colors.map((color, index) => {
                return (
                  <div key={index}>
                    <div
                      className="mr-2 h-5 w-5 rounded-full"
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="flex content-center w-full mt-6">
              <button
                onClick={(e) =>{ addToCart(e, prod, quantityToAdd);toast.success(`${prod.attributes.title} was added to Cart`)}}
                className="w-36 h-8 text-white rounded-lg bg-blue-600 border-[1px] border-gray-700 border-solid"
              >
                Add To Cart
              </button>
              <div className="ml-4 h-8 rounded-lg flex border-[1px] border-gray-500 border-solid">
                <button
                  onClick={incQuantity}
                  className=" w-6 border-e-[1px] border-gray-500"
                >
                  +
                </button>
                <p className="mx-4 content-center ">{quantityToAdd}</p>
                <button
                  onClick={decQuantity}
                  className="w-6 border-s-[1px] border-gray-500"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Product;
