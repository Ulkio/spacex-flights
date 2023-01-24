import Navbar from "@c/Navbar";
import Home from "@p/Home";
import Shop from "@p/Shop";
import Contact from "@p/Contact";
import Falcon from "@p/Falcon";
import FalconHeavy from "@p/FalconHeavy";
import Dragon from "@p/Dragon";
import Starship from "@p/Starship";
import Starlink from "@p/Starlink";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme} `}>
        <Navbar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/falcon" element={<Falcon />} />
            <Route path="/falcon-heavy" element={<FalconHeavy />} />
            <Route path="/dragon" element={<Dragon />} />
            <Route path="/starship" element={<Starship />} />
            <Route path="/starlink" element={<Starlink />} />
            <Route path="/*" element={<></>} />
          </Routes>
        </AnimatePresence>
        <Home />
        <Shop />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
