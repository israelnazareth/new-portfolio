import { ToastContainer } from "react-toastify";
import "./App.css";
import Certificates from "./app/components/Certificates";
import Contact from "./app/components/Contact";
import Footer from "./app/components/Footer";
import Header from "./app/components/Header";
import Navbar from "./app/components/Navbar";
import ProgressBar from "./app/components/ProgressBar";
import Projects from "./app/components/Projects";
import Techs from "./app/components/Technologies";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
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
