import React from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/plugnplaycomponents/Gallery";
import Todos from "./components/plugnplaycomponents/Todo/Todos";
import NavBar from "./components/Navbar/NavBar";
import Scroll from "./components/plugnplaycomponents/Scroll/Scroll";
import ReduxToolkit from "./components/RTK/ReduxToolkit";
import Geolocation from "./components/Geolocation";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/reduxtoolkit" element={<ReduxToolkit />} />
        <Route path="/geolocation" element={<Geolocation />} />
      </Routes>
    </div>
  );
}

export default App;
