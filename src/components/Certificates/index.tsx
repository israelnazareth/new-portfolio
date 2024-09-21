import useAnimationOnScroll from "../../hooks/useAnimationOnScroll";
import certificatesData from "./certificatesData.json";
import "./styles.css";

export default function Certificates() {
  const { refs } = useAnimationOnScroll("fadeIn", certificatesData.length);

  return (
    <div className="certificates" id="certificates">
      <h1 className="title">Certificados</h1>
      <div className="certificates-container">
        {certificatesData.map(({ img, path, title }, index) => (
          <div className="certificate" key={title} ref={refs[index]}>
            <div className="certificate-content">
              <a href={path} target="blank">
                <img src={img} alt={title} title={title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
