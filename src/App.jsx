import React/* , {useState}  */from "react";
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import Header from "./components/partials/Header";
import Main from "./components/home/Main";
import Footer from "./components/partials/Footer";
import AboutUs from "./components/aboutUs/AboutUs"; 
import Register from "./components/user/Register";
import DetallesDeProducto from "./components/productos/DetallesDeProducto";
import Login from "./components/user/Login";
import AllProducts from "./components/productos/AllProducts";
import LoMasVendido from "./components/productos/LoMasVendido";

import Admin from "./components/admin/Admin";
import UserList from "./components/admin/UserList";
import ProductList from "./components/admin/ProductList";

import './style/estilos.css'
import CrearProducto from "./components/admin/CrearProducto";


function App() {/* 
  const [main, setMain] = useState(true) */
  return (
    <div className="home">
      <BrowserRouter>
        <Header/>

          <Routes>
            {/* Home */}
            <Route path='/' element={<Main/>}/>
            {/* AboutUs */}
            <Route path='/AboutUs' element={<AboutUs/>}/>
            {/* Register */}
            <Route path='/Register' element={<Register/>}/>
            {/* Login */}
            <Route path='/Login' element={<Login/>}/>
            {/* Detalle */}
            <Route path='/DetallesDeProducto/:productId' element={<DetallesDeProducto/>}/>
            {/* AllProducts */}
            <Route path='/AllProducts' element={<AllProducts/>}/>
            {/* LoMasVendido */}
            <Route path='/LoMasVendido' element={<LoMasVendido/>}/>
            
            
            {/* Admin */}
            <Route path='/Admin' element={<Admin/>}/>
            {/* CrearProducto */}
            <Route path='/Admin/crear/producto' element={<CrearProducto/>}/>
            {/* UserList */}
            <Route path='/UserList' element={<UserList/>}/>
            {/* ProductList */}
            <Route path='/ProductList' element={<ProductList/>}/>
          </Routes>

          {<CrearProducto/>? <Footer/> ===null : null}
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

