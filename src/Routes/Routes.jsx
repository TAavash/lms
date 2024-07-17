import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage";
import Register from "../pages/Register";
import LibrarianDash from "../pages/Librarian/LibrarianDashboard/LibrarianDash";
import LibrarianBooks from "../pages/Librarian/LibrarianBooks/LibrarianBooks";
import LibrarianBooksCheckIn from "../pages/Librarian/LibrarianBooks/LibrarianBooksCheckIn";
import LibrarianBooksCheckOut from "../pages/Librarian/LibrarianBooks/LibrarianBooksCheckOut";
import LibrarianBooksResearvation from "../pages/Librarian/LibrarianBooks/LibrarianBooksReservations";
import Help from "../pages/Help";
import Notification from "../pages/Notification";
import Settings from "../pages/Settings";
import Message from "../pages/Message";
import LibrarianFines from "../pages/Librarian/LibrarianFines/LibrarianFines";
import LibrarianOthers from "../pages/Librarian/LibrarianOthers/LibrarianOthers";
import Patrons from "../pages/Librarian/LibrarianDashboard";
import LibrarianDashboard from "../pages/Librarian/LibrarianDashboard";
import { MemberDetail } from "../pages/Librarian/MemberDetail";
import BookRegistration from "../pages/Librarian/BookRegistration";
import MemberRegistration from "../pages/Librarian/MemberRegistration";
import LibraryRequestPage from "../pages/Librarian/Patrons/Request/LibraryRequestPage";
import { AllUsers } from "../pages/Librarian/Patrons/Users/AllUsers";
import { FacultyMembers } from "../pages/Librarian/Patrons/Users/FacultyMembers";
import { LibraryAssistant } from "../pages/Librarian/Patrons/Users/LibraryAssistant";
import { Students } from "../pages/Librarian/Patrons/Users/Students";
import ProgramCoordinators from "../pages/Librarian/Patrons/Users/ProgramCoordinators";
import Membership from "../pages/Librarian/Membership";

export default function RoutesNav() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/librarian-dashboard" element={<LibrarianDash />} />
        <Route path="/librarian-books" element={<LibrarianBooks />} />
        <Route
          path="/librarian-books-check-in"
          element={<LibrarianBooksCheckIn />}
        />
        <Route
          path="/librarian-books-check-out"
          element={<LibrarianBooksCheckOut />}
        />
        <Route
          path="/librarian-books-reservation"
          element={<LibrarianBooksResearvation />}
        />
        <Route path="/help" element={<Help />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/message" element={<Message />} />
        <Route path="/librarian-fines" element={<LibrarianFines />} />
        <Route path="/librarian-others" element={<LibrarianOthers />} />
        <Route path="/patrons" element={<LibrarianDashboard />} />
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
        <Route path="/MembershipPage" element={<Membership />} />
      </Routes>
    </>
  );
}