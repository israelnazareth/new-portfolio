import certificatesData from "./certificatesData.json";
import "./styles.css";

export default function Certificates() {
  return (
    <div className="certificates" id="certificates">
      <h1 className="title">Certificados</h1>
      <div className="certificates-container">
        {certificatesData.map(({ img, path, title }) => (
          <div data-aos="fade-in" className="certificate" key={title}>
            <div className="certificate-content">
              <a href={path} target="blank">
                <img src={img} alt={title} loading="lazy" title={title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
