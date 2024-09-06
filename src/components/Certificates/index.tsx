import { useState } from "react";
import { Modal } from "../Modal";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const handleModal = (img: string, path: string) => {
    setIsModalOpen(true);
    setModalContent(
      img ? (
        <div className="modal-content">
          <img src={img} style={{ width: "100%" }} />
          <div className="action-buttons">
            <button
              type="button"
              onClick={() => window.open(path, "_blank")}
              className="go-to-certificate"
            >
              Ir para certificado
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="close"
            >
              Fechar
            </button>
          </div>
        </div>
      ) : null
    );
  };

  const buttonStyle = {
    width: "fit-content",
    border: "none",
    padding: 0,
    cursor: "pointer",
  };

  return (
    <>
      <div data-aos="fade-in" className="certificates" id="certificates">
        <h1 className="title">Certificados</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {certificatesData.map(({ img, path, title }) => (
              <div data-aos="fade-in" className="certificate" key={title}>
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>
    </>
  );
}
