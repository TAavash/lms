import React from "react";

const ReportAndAnalytics = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[100%] h-[20%] bg-[#F5F5F5] px-[50px] py-[30px] rounded-tr-2xl">
        <div className="w-full h-full flex justify-evenly p-[10px] gap-[5px]">
          <div className="w-[100%] h-full flex-col">
            <div className="w-full h-auto text-start text-3xl p-1">
              Report & Analytics
            </div>

            <div className="w-full h-auto text-start text-2xl text-gray-600 p-1">
              Manage all report & analytics
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col h-[80%] p-[30px] gap-[30px] bg-white rounded-br-2xl overflow-y-auto scroll-smooth scrollbar-thin">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px] my-2">
          Report
        </div>
      </div>
    </div>
  );
};

export default ReportAndAnalytics;
