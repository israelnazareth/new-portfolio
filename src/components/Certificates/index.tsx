import { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CertificateModal } from "../Modal";
import certificatesData from "./certificatesData.json";
import "./styles.css";

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [swiped, setSwiped] = useState(false);

  const handleOnItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (swiped) {
      event.stopPropagation();
      event.preventDefault();
      setSwiped(false);
    }
  };

  const handleSwipeEvent = (swipeDirection: string) => {
    if (swipeDirection === "left" || swipeDirection === "right") {
      setSwiped(true);
    }
  };

  const settings: Settings = {
    swipeEvent: handleSwipeEvent,
    afterChange: () => setSwiped(false),
    className: "center",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const handleModal = (img: string, path: string) => {
    setIsModalOpen(true);
    const content = (
      <a href={path} target="_blank">
        <img src={img} style={{ width: "100%", borderRadius: "0.5rem" }} />
      </a>
    );
    setModalContent(content);
  };

  const buttonStyle = {
    width: "fit-content",
    border: "none",
    padding: 0,
    cursor: "pointer",
    borderRadius: "0.75rem",
  };

  return (
    <>
      <div data-aos="fade-in" className="certificates" id="certificates">
        <h1 className="title">Certificados</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {certificatesData.map(({ img, path, title }) => (
              <div
                data-aos="fade-in"
                className="certificate"
                onClickCapture={handleOnItemClick}
                key={title}
              >
                <button
                  type="button"
                  onClick={() => handleModal(img, path)}
                  style={buttonStyle}
                >
                  <img src={img} alt={title} title={title} />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {modalContent}
      </CertificateModal>
    </>
  );
}
