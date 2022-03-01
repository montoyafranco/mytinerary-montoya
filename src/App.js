import "./App.css";
import axios from "axios";
import React,{useEffect, useState} from  "react"
import "./styles/carrousel1.css";
import ResponsiveAppBar from "./components/navbar";
import RecipeReviewCard from "./components/card";
// import CarrouselImg from './components/carrousel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrousel1 from "./components/carrousel1";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleContainer from "./components/container";
import Cities from "./pages/cities"
import Home from "../src/pages/home";
import Footer from "./components/footer";
import CardsDetalle from "../src/components/details"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Cities" element={<Cities/>}/>
        <Route path="*" element={<Home/>} />
        <Route path="/details/:id" element={<CardsDetalle/>} />

      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
