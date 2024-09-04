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
    centerPadding: "0",
    dots: true,
    slidesToShow: 3,
    speed: 500,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
