import "./ImageSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ slides }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
  };

  return (
    <>
      <section className="imageSlider">
        <Slider {...settings}>
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                <img src={slide.image} alt="slider" />
              </div>
            );
          })}
        </Slider>
      </section>
      {/* <section className="slider">
        <div className="slider__images" ref={sliderImages} style={{ transform: `translateX(-${SlideWidth * current}px)` }}>
          {slides.map((slide, index) => {
            return (
              <div className={index === current ? "slide active" : "slide"} key={index}>
                <img src={slide.image} alt="slider" />
              </div>
            );
          })}
        </div>
        <button onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)} className="slider__prev">
          prev
        </button>
        <button onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)} className="slider__next">
          next
        </button>
      </section> */}
    </>
  );
}
