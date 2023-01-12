import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import GalleryCats from "./Pages/GalleryCats";
import GalleryDogs from "./Pages/GalleryDogs";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<GalleryCats />} />
        <Route path="/dogs" element={<GalleryDogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
