import { ToastContainer } from "react-toastify";
import "./App.css";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import Projects from "./components/Projects";
import Techs from "./components/Technologies";

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
