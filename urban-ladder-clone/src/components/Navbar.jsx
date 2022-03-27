import React from "react";
import { BottomNavbar } from "./BottomNavbar";
// import { AuthenticateButton, Button } from "./Button";
import { MiddleNavbar } from "./MiddleNavbar";
import { TopNavbar } from "./TopNavbar";

export const Navbar = () => {
  return (
    <div>
     <TopNavbar/>
     <MiddleNavbar/>
     <BottomNavbar/>
    </div>
  );
};
