import React from "react";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="bg-white h-fit">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold mt-5">Choose Your Plan</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center my-10  gap-10 max-w-[1000px] mx-auto">
        <div className=" border-2 flex flex-col items-center border-gray-400 h-fit min-w-[300px] px-5 max-w-[600px] ">
          <div className="flex flex-col items-center justify-center gap-4 my-4">
            <h1 className="text-3xl text-gray-500">Free Trial Plan</h1>
            <p className="text-2xl">Rs0/15 days</p>
          </div>
          <div className="bg-slate-100 border-2 rounded-sm h-80  ">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[15px] text-gray-500 pt-3">
                Upto 10 pdf for 15 days
              </p>
              ...................................................
              <p className="text-[11px] text-gray-500">
                Recharge again after 15 days or 10 PDF <br />{" "}
                <span className="mx-7">usage whichever is earlier</span>
              </p>
              ................................................................
              <p className="text-[15px] text-gray-500">File size upto 10 MB</p>
              ........................................
              <p className="text-[5px]">|||||||||||||||||||||||||</p>
              .............
              <br />
              <button className="bg-blue-800 text-white p-3 w-44 rounded-lg">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className=" border-2 flex flex-col items-center border-gray-400 h-fit  min-w-[300px] px-5 max-w-[600px]">
          <div className="flex flex-col items-center justify-center gap-4 my-4">
            <h1 className="text-3xl text-gray-500">Yearly Plan</h1>
            <p className="text-2xl">Rs1100/365 days</p>
          </div>
          <div className="bg-slate-100 border-2 rounded-sm h-80 w-64 ">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[15px] text-gray-500 mt-3">
                Upto 1200 pdf for 365 days
              </p>
              ...................................................
              <p className="text-[11px] text-gray-500">
                Recharge again after 365 days or 1200 PDF <br />{" "}
                <span className="mx-7">usage whichever is earlier</span>
              </p>
              ................................................................
              <p className="text-[15px] text-gray-500 ">File size upto 10 MB</p>
              ........................................
              <p className="text-[5px]">|||||||||||||||||||||||||</p>
              .............
              <br />
              <button className="bg-blue-800 text-white p-3 w-44 rounded-lg">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className=" border-2 flex flex-col items-center border-gray-400 h-fit min-w-[300px] px-5 max-w-[600px]">
          <div className="flex flex-col items-center justify-center gap-4 my-4">
            <h1 className="text-3xl text-gray-500">Monthly Plan</h1>
            <p className="text-2xl">Rs1000/30 days</p>
          </div>
          <div className="bg-slate-100 border-2 rounded-sm h-80 w-64 ">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[15px] text-gray-500 mt-3">
                Upto 75 pdf for 30 days
              </p>
              ...................................................
              <p className="text-[11px] text-gray-500">
                Recharge again after 30 days or 75 PDF <br />{" "}
                <span className="mx-7">usage whichever is earlier</span>
              </p>
              ................................................................
              <p className="text-[15px] text-gray-500">File size upto 10 MB</p>
              ........................................
              <p className="text-[5px]">|||||||||||||||||||||||||</p>
              .............
              <br />
              <button className="bg-blue-800 text-white p-3 w-44 rounded-lg">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  place-items-center justify-items-center my-10  gap-10 max-w-[650px] mx-auto">
        <div className=" border-2 flex flex-col items-center border-gray-400 h-fit  min-w-[300px] px-5 max-w-[600px]">
          <div className="flex flex-col items-center justify-center gap-4 my-4">
            <h1 className="text-3xl text-gray-500">
              Monthly Plan with <br />
              <span className="mx-6">Human review</span>
            </h1>
            <p className="text-2xl">Rs2000/30 days</p>
          </div>
          <div className="bg-slate-100 border-2 rounded-sm h-80 w-64 ">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[15px] text-gray-500 mt-3">
                Upto 75 pdf for 30 days
              </p>
              ...................................................
              <p className="text-[11px] text-gray-500">
                Recharge again after 30 days or 75 PDF <br />{" "}
                <span className="mx-7">usage whichever is earlier</span>
              </p>
              ................................................................
              <p className="text-[15px] text-gray-500">File size upto 10 MB</p>
              ........................................
              <p className="text-[5px]">|||||||||||||||||||||||||</p>
              .............
              <br />
              <button className="bg-blue-800 text-white p-3 w-44 rounded-lg">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
        <div className=" border-2 flex flex-col items-center border-gray-400 h-fit  min-w-[300px] px-5 max-w-[600px]">
          <div className="flex flex-col items-center justify-center gap-4 my-4">
            <h1 className="text-3xl text-gray-500">
              Yearly Plan with <br />
              <span className="mx-2">Human review</span>
            </h1>
            <p className="text-2xl">Rs23000/365 days</p>
          </div>
          <div className="bg-slate-100 border-2 rounded-sm h-80 w-64 ">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-[15px] text-gray-500 mt-3">
                Upto 1200 pdf for 365 days
              </p>
              ...................................................
              <p className="text-[11px] text-gray-500">
                Recharge again after 365 days or 1200 PDF <br />{" "}
                <span className="mx-7">usage whichever is earlier</span>
              </p>
              ................................................................
              <p className="text-[15px] text-gray-500">File size upto 10 MB</p>
              ........................................
              <p className="text-[5px]">|||||||||||||||||||||||||</p>
              .............
              <br />
              <button className="bg-blue-800 text-white p-3 w-44 rounded-lg">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
