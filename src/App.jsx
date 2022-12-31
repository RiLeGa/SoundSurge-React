import React, {useState} from "react";
import Header from "./components/partials/Header";
import Main from "./components/home/Main";
import Footer from "./components/partials/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import './style/estilos.css'


function App() {
  const [main, setMain] = useState(false)
  return (
    <div className="home">
      <Header/>

      { main ? 
      
      <Main />
      :

      <AboutUs />

      }
      <Footer/>
    </div>
  );
}

export default App;

