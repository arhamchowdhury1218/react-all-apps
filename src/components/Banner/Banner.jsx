import { Link } from "react-router";
import appStoreLogo from "../../assets/app_store_logo.png";
import playStoreLogo from "../../assets/play_store_logo.png";
import hero from "../../assets/hero.png";
import StateSection from "../StateSection/StateSection";
const Banner = () => {
  return (
    <div className="relative mb-40 lg:mb-56">
      {" "}
      <div className="max-w-11/12 mx-auto">
        {" "}
        <div className="text-center my-10 max-w-4xl mx-auto">
          <div className="text-5xl font-bold">
            <h1>We Build</h1>
            <h1>
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-gray-500">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>
          <div className="flex items-center justify-center mt-5 gap-6">
            <Link to="https://play.google.com/store/apps?hl=en">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl flex items-center">
                <img
                  className="w-5 lg:w-8 h-5 lg:h-8 rounded-2xl"
                  src={playStoreLogo}
                  alt=""
                />
                Google Play
              </button>
            </Link>
            <Link to="https://www.apple.com/app-store/">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl flex items-center">
                <img
                  className="w-5 lg:w-8 h-5 lg:h-8"
                  src={appStoreLogo}
                  alt=""
                />
                App Store
              </button>
            </Link>
          </div>
          <div className="mt-15">
            <img className="" src={hero} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="max-w-full mx-auto absolute ">
        <StateSection></StateSection>
      </div> */}
      {/* <div className="absolute lg:top-157 left-1/2 -translate-x-1/2 translate-y-1/2  w-full">
        <StateSection />
      </div> */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-full z-10">
        <StateSection />
      </div>
    </div>
  );
};

export default Banner;
