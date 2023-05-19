import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Main from './views/Main'
import './App.css';
import ProductForm from "./components/ProductForm";
import Dashboard from "./components/Dashboard";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Main />} />
        <Route path='/create' element={<ProductForm />} />
        <Route path='/allproducts' element={<Dashboard />} />
        <Route path='/oneProduct/:id' element={<OneProduct />} />
        <Route path='/updateProduct/:id' element={<UpdateProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
