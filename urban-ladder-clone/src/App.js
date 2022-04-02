import "./App.css";
import { Router } from "./Router";

import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { MdLocalGasStation } from "react-icons/md";
// import Address from "./pages/Address";
// import Cart from "./pages/Cart";
// import Payment from "./pages/Payment";


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname.startsWith("/code=")) {
      localStorage.setItem("accesstoken", location.pathname.split("=")[1]);
      navigate("/");
    }
  }, []);
  return (
    <div className="App">
      {
        !location.pathname.includes("cart") && <Navbar/> 
      }
     
       <Router/> 
    </div>
  );
}

export default App;
