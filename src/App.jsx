import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Homepage/Home';
import Footer from './Components/footer/Footer';
import Donations from './Components/Donationspage/Donations';
import Blog from './Pages/Blog page/Blog';
import Seva from './Pages/seva page/Seva';
import OurStory from './Pages/ourstory/Ourstory';
import Temple from './Pages/Temples/Temple';
import Gallery from './Pages/gallery/Gallery';
import NotFound from './Components/Not found/NotFound.JSX';
import ScrollToTop from './Components/ScrollBar/ScrollToTop';

function App() {
  const location = useLocation();

  // ✅ Define valid routes
  const validRoutes = [
    "/", "/donations", "/blogs", "/sevas", "/ourstory", "/temples", "/gallery"
  ];

  // ✅ Check if current route is invalid
  const isNotFound = !validRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!isNotFound && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/sevas" element={<Seva />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/temples" element={<Temple />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isNotFound && <Footer />}
    </>
  );
}

export default App;
