import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";
import GalleryCats from "./Pages/GalleryCats";
import GalleryDogs from "./Pages/GalleryDogs";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./ScrollToTop";
import GifCat from './Pages/GifCat';
import GifDog from './Pages/GifDog';
import ScrollToTopBtn from "./Components/ScrollToTopBtn";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cats" element={<GalleryCats />} />
          <Route path="/dogs" element={<GalleryDogs />} />
          <Route path="/gifcat" element={<GifCat/>} />
          <Route path="/gifdog" element={<GifDog/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopBtn />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
