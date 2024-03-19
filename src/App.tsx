import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Techs from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 500 });

function App() {
  return (
    <div className="App">
      <ProgressBar />
      <Navbar />
      <Header />
      <Projects />
      <Certificates />
      <Techs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
