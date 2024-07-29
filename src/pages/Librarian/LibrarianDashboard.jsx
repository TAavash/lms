import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import NavNew from "../../components/NavNew";
import { useLocation, useNavigate } from "react-router-dom";
import AllUsers from "./Patrons/Users/AllUsers";
import { FacultyMembers } from "./Patrons/Users/FacultyMembers";
import { LibraryAssistant } from "./Patrons/Users/LibraryAssistant";
import ProgramCoordinators from "./Patrons/Users/ProgramCoordinators";
import { Students } from "./Patrons/Users/Students";

export default function LibrarianDashboard() {
  const navigate = useNavigate();

  const handleAddIconClick = () => {
    navigate("/MemberRegistration");
  };

  const handleUserClick = () => {
    navigate('/LibraryDash');
  };

  const handleRequestClick = () => {
    navigate("/LibraryRequestPage");
  };

  const handleMembershipClick = () => {
    navigate('/MembershipPage')
  };

  const [active, setActive] = useState("allusers");

  const location = useLocation();

  const handleAllActive = () => {
    setActive("allusers");
  };
  const handleFacultyActive = () => {
    setActive("facultymembers");
  };
  const handleAssistantActive = () => {
    setActive("libraryassistant");
  };
  const handleCoordinatorActive = () => {
    setActive("programcoordinators");
  };
  const handleStudentActive = () => {
    setActive("students");
  };

  const renderActiveComponent = () => {
    switch (active) {
      case "facultymembers":
        return <FacultyMembers />;
      case "libraryassistant":
        return <LibraryAssistant />;
      case "programcoordinators":
        return <ProgramCoordinators />;
      case "students":
        return <Students />;
      default:
        return <AllUsers />;
    }
  };

  console.log(location);

  return (
    <div>
      <NavNew />
      <div className="min-h-screen h-auto bg-gray-200 py-[10px]">
        <div className="flex justify-evenly gap-[20px] mx-[3%]">
          <button
            className="w-[150px] h-[120px] rounded-2xl bg-[#14273D] text-white shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleUserClick}
          >
            Users
          </button>
          <button
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleAddIconClick}
          >
            Add Member
          </button>
          <button className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleMembershipClick}>
            Membership
          </button>
          <button
            className="w-[150px] h-[120px] rounded-2xl hover:bg-[#A3A3A3] bg-white  shadow-slate-500 shadow-md mt-[100px]"
            onClick={handleRequestClick}
          >
            Request
          </button>
        </div>
        <div className="p-[20px] ">
          <div className="flex h-[800px] w-[100%] my-[100px] rounded-2xl bg-white shadow-slate-500 shadow-md ">
            <div className="h-[800px] w-[300px] rounded-l-2xl bg-[#14273D]">
              <div className="flex flex-col gap-[10px] justify-center items-center h-[20%] p-[20px] border-b-4 border-[#A3A3A3]">
                <FaUser className=" fill-[#f2e9e9]  text-5xl" />
                <div className="text-white flex-col justify-center text-center text-3xl">
                  Users
                </div>
              </div>
              <div className="text-[#737373] flex flex-col gap-[30px] justify-top items-center h-[80%] p-[20px] pt-[50px]">
                <button
                  className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAllActive}
                >
                  {active === "allusers" ? (
                    <div className="text-white">All</div>
                  ) : (
                    <div>All</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleStudentActive}
                >
                  {active === "students" ? (
                    <div className="text-white">Students</div>
                  ) : (
                    <div>Students</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleFacultyActive}
                >
                  {active === "facultymembers" ? (
                    <div className="text-white">Faculty Members</div>
                  ) : (
                    <div>Faculty Members</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleCoordinatorActive}
                >
                  {active === "programcoordinators" ? (
                    <div className="text-white">Program Coordinators</div>
                  ) : (
                    <div>Program Coordinators</div>
                  )}
                </button>
                <button
                  className="h-auto hover:text-white  rounded-xl text-2xl p-[2px] px-[3px]"
                  onClick={handleAssistantActive}
                >
                  {active === "libraryassistant" ? (
                    <div className="text-white">Library Assistants</div>
                  ) : (
                    <div>Library Assistants</div>
                  )}
                </button>
              </div>
            </div>
            <div className="w-full h-full rounded-2xl">
              {renderActiveComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react'
// import LibrarianHeader from '../../components/librarianHeader'
// import Navbar from '../../components/Navbar'

// const LibrarianDashboard = () => {

//   const tableData = [{
//     id: 3542342,
//     fullname: "sudarshan",
//     status: "active",
//     joinDate: "May 20, 2024"
//   }, {
//     id: 3542342,
//     fullname: "sudarshan",
//     status: "active",
//     joinDate: "May 20, 2024"
//   }, {
//     id: 3542342,
//     fullname: "sudarshan",
//     status: "active",
//     joinDate: "May 20, 2024"
//   }, {
//     id: 3542342,
//     fullname: "sudarshan",
//     status: "active",
//     joinDate: "May 20, 2024"
//   }, {
//     id: 3542342,
//     fullname: "sudarshan",
//     status: "active",
//     joinDate: "May 20, 2024"
//   }, {
//     id: 3542342,
//     fullname: "sudarshan",
//     status: "active",
//     joinDate: "May 20, 2024"
//   }]
//   return (
//     <div className='bg-gray-200 flex flex-col gap-10 w-full p-2'>
//       <LibrarianHeader />

//       <Navbar />

//       <div className="flex justify-evenly ">
//         <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 active:bg-black shadow-slate-500 shadow-md mt-[100px]">
//           All Books
//         </button>
//         <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]">
//           Check-In
//         </button>
//         <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]">
//           Check-Out
//         </button>
//         <button className="w-[150px] h-[120px] rounded-2xl bg-white hover:bg-red-600 shadow-slate-500 shadow-md mt-[100px]">
//           Reservations
//         </button>
//       </div>

//       <div className='mx-[170px]'>
//         <table className='border border-collapse bg-white'>
//           <tr className=''>
//             <th className='w-24 p-2'>ID</th>
//             <th className='w-24 p-2'>Name</th>
//             <th className='w-24 p-2'>Status</th>
//             <th className='w-32 p-2'>Joined Date</th>
//           </tr>
//           {tableData.map((person) => {
//             return (
//               <tr key={person.id}>
//                 <td className='p-3'>{person.id}</td>
//                 <td className='p-3'>{person.fullname}</td>
//                 <td className='p-3'>{person.status}</td>
//                 <td className='p-3'>{person.joinDate}</td>
//               </tr>)
//           })}

//         </table>
//       </div>

//     </div>

//   )
// }

// export default LibrarianDashboard