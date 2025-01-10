import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Portofolio from "./Components/Portofolio/Portofolio";
import "./App.css";
// import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

const App = () => {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portofolio", element: <Portofolio /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default App;
