import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className=" md:flex justify-center items-center">
      <div className="ml-auto mr-auto py-6 md:p-8 lg:px-16 xl:px-28 w-4/5 md:w-8/12">
        <h1 className="drop-in py-6 text-2xl md:text-3xl xl:text-5xl font-extrabold text-slate-800">
          Driving the next generation of retail experiences.
        </h1>
        <p className="drop-in-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vel
          magni velit similique, alias sit quibusdam natus vitae dolorum
          perspiciatis eius itaque, reprehenderit, ad laboriosam fuga cumque
          expedita commodi voluptatum?
        </p>
        <Link to="/products">
          <button className="drop-in-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 my-6">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
              Our Products
            </span>
          </button>
        </Link>
      </div>
      <div className="fadeInLeft md:p-2 mb-6 w-4/5 ml-auto mr-auto md:w-3/5">
        <img
          className="homepage-img w-full md:w-4/5 rounded-xl"
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
