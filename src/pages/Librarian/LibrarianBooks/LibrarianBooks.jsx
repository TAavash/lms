import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { IoSearch, IoSettingsSharp } from "react-icons/io5";
import FlipCard from "../../../components/FlipCard";
import { useLocation, useNavigate } from "react-router-dom";
import NavNew from "../../../components/NavNew";
import All from "./SidebarComp/All Books/All";
import Stock from "./SidebarComp/All Books/Stock";
import Categories from "./SidebarComp/All Books/Categories";
import ElectronicLocation from "./SidebarComp/All Books/ElectronicLocation";
import Requested from "./SidebarComp/All Books/Requested";
import EBooks from "./SidebarComp/All Books/EBooks";

const LibrarianBooks = () => {
  const navigate = useNavigate();
  const handleOpenLibrary = () => {
    navigate(`/librarian-books`);
  };
  const handleCheckIn = () => {
    navigate(`/librarian-books-check-in`);
  };
  const handleCheckOut = () => {
    navigate(`/librarian-books-check-out`);
  };
  const handleReservations = () => {
    navigate(`/librarian-books-reservation`);
  };

  const [active, setActive] = useState("");

  const location = useLocation();

  const handleAllActive = () => {
    setActive("all");
  };
  const handleStockActive = () => {
    setActive("stock");
  };
  const handleCategoriesActive = () => {
    setActive("categories");
  };
  const handleElectronicLocationActive = () => {
    setActive("electronic-location");
  };
  const handleRequestedActive = () => {
    setActive("requested");
  };
  const handleEBooksActive = () => {
    setActive("e-books");
  };

  console.log(location);

  const renderActiveComponent = () => {
    switch (active) {
      case 'stock':
        return <Stock />;
      case 'categories':
        return <Categories />;
      case 'electronic-location':
        return <ElectronicLocation />;
      case 'requested':
        return <Requested />;
      case 'e-books':
        return <EBooks />;
      default:
        return <All />;
    }
  };

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button
            onClick={handleOpenLibrary}
            className="w-[150px] h-[120px] rounded-2xl bg-[#A3A3A3] hover:bg-red-600 shadow-slate-500 shadow-md mt-[200px]"
          >
            All Books
          </button>
          <button
            onClick={handleCheckIn}
            className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[200px]"
          >
            Check-In
          </button>
          <button
            onClick={handleCheckOut}
            className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[200px]"
          >
            Check-Out
          </button>
          <button
            onClick={handleReservations}
            className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[200px]"
          >
            Reservations
          </button>
        </div>
        <div className="p-[20px]">
          <div className="flex h-[1000px] w-[100%] my-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[1000px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaBook className=" fill-[#A3A3A3]  h-[40%] w-[40%]" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Books
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button
                  className="h-[40px] hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAllActive}
                >
                  {active === "all" ? (
                    <div className="text-red-600">All</div>
                  ) : (
                    <div>All</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleStockActive}
                >
                  {active === "stock" ? (
                    <div className="text-red-600">Stock</div>
                  ) : (
                    <div>Stock</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleCategoriesActive}
                >
                  {active === "categories" ? (
                    <div className="text-red-600">Categories</div>
                  ) : (
                    <div>Categories</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleElectronicLocationActive}
                >
                  {active === "electronic-location" ? (
                    <div className="text-red-600">Electronic Location</div>
                  ) : (
                    <div>Electronic Location</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleRequestedActive}
                >
                  {active === "requested" ? (
                    <div className="text-red-600">Requested</div>
                  ) : (
                    <div>Requested</div>
                  )}
                </button>
                <button
                  className="h-auto hover:bg-white rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleEBooksActive}
                >
                  {active === "e-books" ? (
                    <div className="text-red-600">E-Books</div>
                  ) : (
                    <div>E-Books</div>
                  )}
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              <div className="w-[100%] h-[16%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
                <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
                  <div className="w-[50%] h-full flex-col">
                    <div className="w-full h-[70%] text-start text-3xl">
                      All Books
                    </div>
                    <div className="w-full h-[30%] text-start text-[-2xl] text-[#525252]">
                      Manage all the books
                    </div>
                  </div>
                  <div className="w-[30%] h-full flex p-[2px] justify-evenly">
                    <div className="w-full h-[30px] rounded-2xl bg-white border flex items-center p-[5px]">
                      <div className="text-[15px] w-[80%] text-[#525252]">
                        Search
                      </div>
                      <div className="w-[20%]">
                        <IoSearch className="w-[20px] h-[20px] justify-end fill-[#A3A3A3]" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] h-full flex p-[2px]">
                    <div className="w-[40px] h-[30px] rounded-2xl bg-white border flex items-center justify-start p-[10px]">
                      <div className="w-[20%]">
                        <IoSettingsSharp className="w-[20px] h-[20px] fill-[#A3A3A3]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* {active === "stock" ? (
                <Stock />
              ) : (<All/>
              )} */}
              {renderActiveComponent()}
            </div>
          </div>
          <div>slide</div>
        </div>
      </div>
    </div>
  );
};

export default LibrarianBooks;