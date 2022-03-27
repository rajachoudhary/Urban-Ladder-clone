import "./App.css";
import { Router } from "./Router";
import { Navbar } from "./components/Navbar";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
