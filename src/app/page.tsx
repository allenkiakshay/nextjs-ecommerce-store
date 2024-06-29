import Banner from "@/Components/HomePage/Banner";
import Bestsellers from "@/Components/HomePage/Bestsellers";
import Categories from "@/Components/HomePage/Categories";
import Fotter from "@/Components/HomePage/Footer";
import Navbar from "@/Components/HomePage/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Bestsellers />
      <Fotter />
    </div>
  );
}
