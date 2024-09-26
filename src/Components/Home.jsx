import Hero from "../Components/Hero";
import FeaturedProducts from "./FeaturedProducts";
function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Home;
