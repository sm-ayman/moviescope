import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./contexts/FavMovieContext";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
      <Footer />
    </MovieProvider>
  );
}

export default App;
