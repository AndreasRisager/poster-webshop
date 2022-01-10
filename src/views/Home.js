import FeaturedProducts from "../components/FeaturedProducts";
import ImageSlider from "../components/ImageSlider";
import SiteHeader from "../components/SiteHeader";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ImageSlider slides={SliderData} />
      <FeaturedProducts />
    </>
  );
}
