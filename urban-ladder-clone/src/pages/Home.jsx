import React from "react";
import { Navbar } from "react-bootstrap";
import { HomePageBanner } from "../components/LandingPage/HomePageBanner";
import { Explore } from "../components/LandingPage/Explore";
import { PopularSlider } from "../components/LandingPage/PopularSlider";
import { Paragraph } from "../components/LandingPage/Paragraph";
import { TopFooter } from "../components/LandingPage/Footer/TopFooter";
import { MiddleFooter } from "../components/LandingPage/Footer/MiddleFooter";
import { BottomFooter } from "../components/LandingPage/Footer/BottomFooter";

export const Home = () => {
  return (
    <div>
      <Navbar style={{ paddingTop: "0" }} />
      <HomePageBanner />
      <Explore />
      <PopularSlider title="Popular Across Site" />
      <Paragraph />
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
};
