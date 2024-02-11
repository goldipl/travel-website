import React from "react";
import logo from "./../public/images/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white padding-container py-4 lg:py-10 w-[100vw] flex justify-center lg:justify-between">
      <div className="max-container flex items-center lg:items-start w-full lg:flex-row flex-col justify-center lg:justify-between">
        <div className="flex-col mb-4">
          <a href="/" className="flex justify-center">
            <img
              className="lg:w-[120px] h-auto w-[60px] mb-4 lg:m-6"
              src={logo.src}
              alt="logo"
              width="150"
              height="143"
            ></img>
          </a>
          <p>© 2024 Travel Website</p>
        </div>
        <div className="flex-col mb-4">
          <h3 className="uppercase text-lg mb-4">Navigation</h3>
          <ul>
            <li className="text-center">
              <a className="text-sm hover:text-[#00df9a]" href="#about_us">
                About Us
              </a>
            </li>
            <li className="text-center">
              <a className="text-sm hover:text-[#00df9a]" href="#how_we_work">
                How We Work?
              </a>
            </li>
            <li className="text-center">
              <a className="text-sm hover:text-[#00df9a]" href="#gallery">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-col mb-4">
          <h3 className="uppercase text-lg mb-4">Pricing</h3>
          <ul>
            <li className="text-center">
              <a className="text-sm hover:text-[#00df9a]" href="/">
                Read more
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-col text-center">
          <h3 className="uppercase text-lg mb-4">Social Media</h3>
          <a href="#">
            <i className="bx bxl-facebook-square mx-1 hover:text-[#00df9a]"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram mx-1 hover:text-[#00df9a]"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin-square mx-1 hover:text-[#00df9a]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
