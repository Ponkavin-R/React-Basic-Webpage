
import './App.css';
//rcc-to create react component
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
//import Service from './Footer/Service';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
