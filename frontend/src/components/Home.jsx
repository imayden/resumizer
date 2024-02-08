import React, { useState } from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import { ContactIcon } from "./Icons";
import { FadeIn } from "./FadeIn";
import Socials from "./Socials";
import UploadPopup from "./UploadPopup";

function Home() {

  // The upload pop-up display status - Default is not open
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  // Toggle the upload pop-up
  const toggleUploadPopup = () => {
    setShowUploadPopup(!showUploadPopup);
  };

  return (
    <Container id="home">

      {/* Title Line */}
      <FadeIn>

        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">

          {/* Title Tile */}
          <div className="flex w-full max-w-[746px] flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
            <img
              src={logo}
              alt="logo"
              className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full"
            />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              Resumizer
              <br />
              Build Your Resume
              {" "}<br />
              <span className="text-[#8a8a93]">
                {" "}
                In Minutes.
              </span>
            </h1>
          </div>

          {/* Action Tile */}
          <div className="flex flex-col justify-between items-stretch gap-x-8 gap-y-8 bg-[#131315] text-center p-12 rounded-3xl max-md:p-8">
            <div className="flex flex-col justify-center items-center mb-8 gap-3 max-md:mb-4">
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                <span className="text-[#8a8a93]">
                  Ready To Feel {" "}
                </span>
                <br />
                The Magic?
              </h2>
            </div>

            {/* Upload File Button */}
            <button
              // href="#"
              onClick={toggleUploadPopup} // Toggle event for the Upload File Button
              className="min-h-[96px] bg-[#bfd3eb] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-black"
            >
              Upload Now
              <span className=" animate-pulse"></span>
            </button>

            {/* Manual Input Button */}
            <a
              href="#"
              className="min-h-[96px] bg-[#bfd3eb] transition-[background-color] duration-300 ease-[ease-out] text-[28px] leading-[48px] font-medium text-center tracking-[-0.01em] px-8 py-6 rounded-[99px] max-md:min-h-[80px] max-md:text-2xl max-md:leading-8 text-black"
            >
              Input Manually
              <span className=" animate-pulse"></span>
            </a>

          </div>

        </div>
      </FadeIn>

      {/* Social Line */}
      <FadeIn>
        <Socials />
      </FadeIn>

      {/* Job Board Line */}
      <FadeIn>
        <div className="flex w-full flex-col items-start gap-x-8 gap-y-8 bg-[#131315] px-12 py-10 rounded-3xl max-mdd:max-w-none max-md:p-8">
          <h3 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            Seeking for a job?{" "}
            <span className="text-[#8a8a93]">
              {" "}
              Let's search here!
            </span>
          </h3>
          <h5 className="max-md:text-[32px] max-md:leading-10 max-md:tracking-[-0.01em]">
            
            <span className="text-[#8a8a93]">
              {" "}
              Here's gonna be a
            </span>
            {" "}
            
            `job search component` 

            <span className="text-[#8a8a93]">
              {" "}
              awaiting to build ......
            </span>
          </h5>
        </div>
      </FadeIn>

      {/* Upload File Pop-up */}
      <UploadPopup isOpen={showUploadPopup} onClose={toggleUploadPopup} />

    </Container>
  );
}

export default Home;
