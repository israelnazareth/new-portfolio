import { useEffect, useRef, RefObject } from "react";
import "./styles.css";
import { getProjectsDataFromSheet } from "../../services";

export default function ProgressBar() {
  const progressBar: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    window.onscroll = () => setProgressBarWidth();
    getProjectsDataFromSheet();
  }, []);

  function setProgressBarWidth() {
    if (progressBar.current === null) return;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.current.style.width = scrolled + "%";
  }

  return (
    <div className="progress-container">
      <div ref={progressBar} className="progress-bar" id="myBar"></div>
    </div>
  );
}
