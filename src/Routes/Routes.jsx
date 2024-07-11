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
import Patrons from "../pages/Librarian/LibrarianPatrons/Patrons";
import User from "../pages/User/User1";

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
        <Route
          path="/help"
          element={<Help />}
        />
        <Route
          path="/notifications"
          element={<Notification />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
        <Route
          path="/message"
          element={<Message />}
        />
        <Route
          path="/librarian-fines"
          element={<LibrarianFines />}
        />
        <Route
          path="/librarian-others"
          element={<LibrarianOthers />}
        />
        <Route
          path="/patrons"
          element={<Patrons />}
        />
        <Route
          path="/users"
          element={<User />}
        />
      </Routes>
    </>
  );
}