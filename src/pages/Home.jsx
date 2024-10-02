import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="bg-white h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2  place-items-center justify-items-center gap-32">
        <div className=" flex flex-col gap-10">
          <h1 className="text-4xl ">
            AI Powered instant data <br /> entry of all your policies
          </h1>
          <p className="text-xl">
            Smartly track your business 365 days in automation <br /> mode
          </p>
          <div className="flex gap-4">
            <button
              onClick={navigateLogin}
              className="bg-orange-400 p-3 w-44 text-l text-white font-semibold rounded-3xl hover:bg-orange-300"
            >
              GET STARTED
            </button>
            <button
              onClick={navigateSignUp}
              className=" border-2 p-3 text-blue-600 font-semibold border-gray-400 hover:bg-gray-200 text-l rounded-3xl w-32"
            >
              TRY NOW
            </button>
          </div>
        </div>
        <div>
          <img
            className="h-[300px] w-[300px] my-16"
            src="/src/assets/AI.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-blue-800 h-fit p-5">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl  mt-3 text-white">Benifits</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-28 my-4">
          <div className="flex flex-col items-center">
            <img
              className="h-36 w-48"
              src="/src/assets/Ai_data_entry.jpg"
              alt=""
            />
            <h1 className="text-2xl  text-white">Smart Work</h1>
            <p className="text-xl text-white">Ai powered instant data entry</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="h-36 w-48" src="/src/assets/reminder.jpg" alt="" />
            <h1 className="text-2xl  text-white">Reminders</h1>
            <p className="text-xl text-white">Send automatic reminders</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="h-36 w-48"
              src="/src/assets/Save_time.webp"
              alt=""
            />
            <h1 className="text-2xl  text-white">Save Time</h1>
            <p className="text-xl text-white">Save Staff time & salary</p>
          </div>

          <div className="flex flex-col items-center">
            <img className="h-36 w-48" src="/src/assets/Tracking.jpg" alt="" />
            <h1 className="text-2xl  text-white">Smart Tracking</h1>
            <p className="text-xl text-white">
              Smartly track your business 365 days in <br />{" "}
              <span className="mx-28">automation mode</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-items-center gap-32 my-20">
        <div>
          <img
            className="h-[400px] w-[450px]"
            src="/src/assets/Reading_ai.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6">
          <p>Why smartdocs365</p>
          <h1 className="text-4xl">
            Smartdocs365{" "}
            <span className="text-orange-500">
              saves <br /> 95%
            </span>{" "}
            of your time <br /> spent reading docs.
          </h1>
          <p>
            You have too many files to read as is. Stop wasting <br /> time.
            Instead, have the Smartdocs365 AI read your <br /> files and answer
            your questions. Get ready to save <br /> some serious time and
            impress your boss!
          </p>
          <div>
            <button
              onClick={navigateLogin}
              className="bg-orange-500 text-l p-3 rounded-xl text-white w-40 font-semibold hover:bg-orange-300"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
