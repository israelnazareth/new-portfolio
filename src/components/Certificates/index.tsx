import Slider, { Settings } from "react-slick";
import certificatesData from "./certificatesData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

export default function Certificates() {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    speed: 300,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-in" className="certificates" id="certificates">
      <h1 className="title">Certificados</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {certificatesData.map(({ img, path, title }) => (
            <div data-aos="fade-in" className="certificate" key={title}>
              <a href={path} target="blank">
                <img src={img} alt={title} loading="lazy" title={title} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
