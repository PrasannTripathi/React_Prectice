import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div
        style={{ transform: "rotate(-3deg)" }}
        className="bg-blue-800 h-fit relative bottom-[100px] w-[150vw] right-[150px] "
      >
        <div
          style={{ transform: "rotate(3deg)" }}
          className="z-[2] relative  w-[100vw] left-[150px] top-[100px] grid grid-cols-1 md:grid-cols-2 place-items-center justify-items-center px-[10%]"
        >
          <div className=" flex flex-col gap-6 w-[80%]">
            <h1 className="text-white text-2xl font-bold">About Us</h1>
            <p className="text-white text-xl max-w-[800px]  pb-20">
              SmartDocs365 is An AI technology  startup based in Mumbai..
              We are  building a platform that will empower  our
              users to simplify and automate  their business smartly.
              Effortlessly  manage policies/ documents, boost 
              efficiency, and focus on what matters  most: your clients.
              Your streamlined  journey starts here.
            </p>
          </div>
          <div>
            <img className="h-[450px] w-[1000px]" src="/src/assets/aboutus.png" alt="" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-fit justify-between px-[15%]">
        <div className="">
          <img src="/src/assets/our_vision.png" alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Our Vision</h1>
          <p className="text-xl max-w-[480px] min-h-[300px]">
            We believe that the future of business lies with artificial 
            intelligence. We want to give AI powered tools and  technology
            benefits to everyone at a reasonable rate.  SmartDocs365
            envisions a future where document  management is effortlessly
            smart, connecting  businesses and individuals with simplicity
            and  innovation.
          </p>
        </div>
      </div>

      <div
        style={{ transform: "rotate(3deg)" }}
        className="bg-blue-500 h-[700px] relative top-[150px] w-[150vw] right-[150px] "
      >
        <div
          style={{ transform: "rotate(-3deg)" }}
          className="z-[2] relative  w-[100vw] left-[150px] top-[100px] flex items-center justify-between px-[15%] "
        >
          <div className=" flex flex-col w-[80%] gap-6">
            <h1 className="text-white text-2xl font-bold">Our Founder</h1>
            <p className="text-white text-xl max-w-[400px] min-w-[300px]">
              Ankit R Mehta, the driving force at SmartDocs365, believes 
              in empowering people. With a CA, CS, LLB background and 
              deep insights into the insurance industry, he's leading our 
              mission to simplify document management. Join us in 
              creating a future where efficiency meets compassion.
            </p>
          </div>
          <div>
            <img
              className="h-[300px] w-[200px] rounded-full"
              src="/src/assets/founder.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-orange-400 w-[100vw]  relative z-[2]"></div>
    </div>
  );
};

export default AboutUs;
