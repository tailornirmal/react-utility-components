import { Routes, Route } from "react-router-dom";
import Gallery from "./components/plugnplaycomponents/Gallery";
import Todos from "./components/plugnplaycomponents/Todo/Todos";
import NavBar from "./components/Navbar/NavBar";
import Scroll from "./components/plugnplaycomponents/Scroll/Scroll";
import ReduxRTK from "./Redux/ReduxRTK";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/reduxtoolkit" element={<ReduxRTK />} />
      </Routes>
    </div>
  );
}

export default App;
