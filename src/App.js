import { Routes, Route } from "react-router-dom";
import Gallery from './components/plugnplaycomponents/Gallery';
import Todos from './components/plugnplaycomponents/Todo/Todos';
import NavBar from "./components/Navbar/NavBar";
import Scroll from "./components/plugnplaycomponents/Scroll/Scroll";


import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/scroll" element={<Scroll />} />
         </Routes>
    </div>
  );
}

export default App;
