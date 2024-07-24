import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Card from "./components/Cards";
import FlipCard from "./components/FlipCard";
import NavbarComp from "./components/NavbarComp";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BookFlip from "./components/BookFlip";
import LibrarianDash from "./pages/LibrarianDash";
import Header from "./components/Header";
import LibrarianDashboard  from "./pages/Librarian/LibrarianDashboard";
import { MemberDetail } from "./pages/Librarian/MemberDetail";
import BookRegistration from "./pages/Librarian/BookRegistration";
import MemberRegistration from "./pages/Librarian/MemberRegistration";
import LibraryRequestPage from "./pages/Librarian/Patrons/Request/LibraryRequestPage";
import { AllUsers } from "./pages/Librarian/Patrons/Users/AllUsers";
import { FacultyMembers } from "./pages/Librarian/Patrons/Users/FacultyMembers";
import { LibraryAssistant } from "./pages/Librarian/Patrons/Users/LibraryAssistant";
import { Students } from "./pages/Librarian/Patrons/Users/Students";
import  ProgramCoordinators  from "./pages/Librarian/Patrons/Users/ProgramCoordinators";
import ForgetPassword from "./pages/ForgetPassword";
import Otp from "./pages/Otp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LibraryDash" element={<LibrarianDashboard />} />
        <Route path="/MemberDetail" element={<MemberDetail />} />
        <Route path="/BookRegistration" element={<BookRegistration />} />
        <Route path="/MemberRegistration" element={<MemberRegistration />} />
        <Route path="/LibraryRequestPage" element={<LibraryRequestPage />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/FacultyMembers" element={<FacultyMembers />} />
        <Route path="/LibraryAssistant" element={<LibraryAssistant />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/ProgramCoordinators" element={<ProgramCoordinators />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/Otp" element={<Otp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
