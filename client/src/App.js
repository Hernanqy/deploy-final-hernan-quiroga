import React from "react";
import Navbar from "./componets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componets/pages/Home";
import Formulario from "./componets/pages/Formulario";
import SignUp from "./componets/pages/SignUp";
import Trailers from "./componets/pages/Trailers";
import Footer from "./componets/Footer";
import { PostProvider } from "./context/postContext";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <PostProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/posts/:id" element={<Formulario />} />
            <Route path="/trailers" element={<Trailers />} />
          </Routes>
          <Footer />
        </Router>
        <Toaster />
      </PostProvider>
    </>
  );
}

export default App;
