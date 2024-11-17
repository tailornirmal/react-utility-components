import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Gallery from "./components/plugnplaycomponents/Gallery";
// import Todos from "./components/plugnplaycomponents/Todo/Todos";

import { BrowserRouter } from "react-router-dom";
// import Error from "./components/plugnplaycomponents/Routing/Error";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />
//   },
//   {
//     path: "/todos",
//     element: <Todos />,
//   },
//   {
//     path: "/gallery",
//     element: <Gallery />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
