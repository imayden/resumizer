import React, { useState } from "react";
import Container from "../components/Container";
import logo from "../assets/logo.svg";
import { FadeIn } from "../components/FadeIn";
import Socials from "../components/Socials";
import UploadPopup from "../components/UploadPopup";
import JobSpy from '../components/JobSpy';
import HeroSection from "../components/HeroSection";
import Tile from "../components/Tile";
import Button from "../components/Button";

// import images for hero section
import image1 from "../assets/img1.gif";
import image2 from "../assets/img2.gif";
import image3 from "../assets/img3.gif";

function Home() {

  // The upload pop-up display status - Default is not open
  const [showUploadPopup, setShowUploadPopup] = useState(false);

  // Toggle the upload pop-up
  const toggleUploadPopup = () => {
    setShowUploadPopup(!showUploadPopup);
  };

  // Images with links
  const images = [
    { src: image1, alt: "image1", link: "https://www.pinterest.com/pin/422916221269288864/" },
    { src: image2, alt: "image2", link: "https://www.pinterest.com/pin/800303796313230970/" },
    { src: image3, alt: "image3", link: "https://www.pinterest.com/pin/3448137206502136/" },
  ];

  return (
    <Container id="home">

      {/* Hero Section */}

      <FadeIn>
        <Tile padding="px-0 py-0" className="overflow-hidden" >
        <HeroSection images={images} />
        </Tile>
      </FadeIn>



      {/* Title Line */}
      <FadeIn>
        {/* Hero Section */}
          <HeroSection />

        <div className="grid gap-x-2 gap-y-2 grid-cols-[1fr_0.7fr] max-mdd:grid-cols-[1fr] grid-rows-[auto] my-2">

          {/* Title Tile */}
          <Tile>
            <img src={logo} alt="logo" className="overflow-hidden w-[108px] h-[108px] flex-[0_0_auto] rounded-full" />
            <h1 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
              Resumizer
              <br />
              Build Your Resume
              <br />
              <span className="text-[#7F739F]">In Minutes.</span>
            </h1>
          </Tile>

          {/* Action Tile */}
          <Tile className="flex-col justify-between items-stretch gap-x-8 gap-y-8 text-center">
            <div>
              <h2 className="max-md:text-[40px] max-md:leading-[48px] max-md:tracking-[-0.01em]">
                <span className="text-[#7F739F]">
                  Ready To Feel {" "}
                </span>
                <br />
                The Magic?
              </h2>
            </div>

            {/* Upload File Button */}
            <Button
              onClick={toggleUploadPopup}
              variant="primary">
              Upload Now
            </Button>


            {/* Manual Input Button */}
            <Button
              href="#"
              variant="secondary">
              Input Now
            </Button>
          </Tile>

        </div>
      </FadeIn>


      <FadeIn>
        {/* Socials Component */}
        <Socials />
      </FadeIn>

      <FadeIn>
        {/* JobSpy Component */}
        <JobSpy />
      </FadeIn>

      {/* Upload File Pop-up */}
      <UploadPopup isOpen={showUploadPopup} onClose={toggleUploadPopup} />

    </Container>
  );
}

export default Home;
