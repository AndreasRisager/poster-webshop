import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";
import SiteHeader from "../components/SiteHeader";
import { SliderData } from "../components/SliderData";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="home">
        <ImageSlider slides={SliderData} />
        <section className="featuredProducts">
          <Product />
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
