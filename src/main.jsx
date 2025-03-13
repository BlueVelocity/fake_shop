import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.jsx'
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App page={<Home />} />}></Route>
        <Route path="/home" element={<App page={<Home />} />}></Route>
        <Route path="/shop" element={<App page={<Shop />} />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
