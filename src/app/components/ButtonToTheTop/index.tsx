import { GrLinkTop } from "react-icons/gr";
import "./styles.css";

export default function ButtonToTheTop() {
  return (
    <a href="#home" aria-label="Home" className="button-fixed">
      <GrLinkTop />
    </a>
  );
}
