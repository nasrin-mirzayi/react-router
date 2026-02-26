import {Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./assets/component/navbar";
import ProductsLayout from "./assets/pages/ProductsLayout";
import ProductsList from "./assets/pages/ProductsList";
import ProductDetails from "./assets/pages/ProductDetails";
import NotFound from "./assets/pages/NotFound";
import Home from "./assets/pages/Home";
import "./App.css"
import Footer from "./assets/component/Footer";
export default function App(){

  return (
    <>
    <div className="nav">
      <Navbar />
      </div>

      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

        <Route path="/products" element={<ProductsLayout />}>
          <Route index   element={<ProductsList />} />
          <Route path=":id" element={<ProductDetails />} />


        </Route>

        <Route path="*" element={<NotFound />} />

        <Route path="/Footer" element={< Footer/>}  />

      </Routes>
    </>
)}

