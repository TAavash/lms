import React from "react";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Card from "./components/Cards";
import FlipCard from "./components/FlipCard";
import NavbarComp from "./components/NavbarComp";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BookFlip from "./components/BookFlip";
import LibrarianDash from "./pages/LibrarianDash";
import LibrarianBooks from "./pages/LibrarianBooks";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LightDarkToggle from "./components/LightDarkToggle";
const App = () => {
  return (
    <div className="min-w-full">
      {/* <div className="fixed z-20">
        <Header />
      </div>
      <Navbar />
      <div>
        <LibrarianBooks />
      </div> */}
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <LightDarkToggle />
    </div>
    </div>
  );
};

export default App;
