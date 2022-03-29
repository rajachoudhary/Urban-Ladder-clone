import React from "react";
import { Navbar } from "react-bootstrap";
import { HomePageBanner } from "../components/LandingPage/HomePageBanner";
import { Explore } from "../components/LandingPage/Explore";

export const Home = () => {
  return (
    <div>
      <Navbar style={{paddingTop:"0"}}/>
      <HomePageBanner/>
      <Explore/>
    </div>
  );
};
