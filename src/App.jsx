import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import {Footer, Navbar, ScrollToTopBtn} from './Components/'
import {GalleryCats, GalleryDogs, Home, NotFound, GifCat, GifDog} from "./Pages/";
import ScrollToTop from './ScrollToTop';

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
