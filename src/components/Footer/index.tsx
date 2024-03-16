import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { FaGlobe } from "react-icons/fa6";
import "./index.css";

const Footer = () => {
  return (
    <footer className="bg-dark-green pt-[124px] pb-[75px]">
      <div className="w-[1500px] mx-auto">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/deuhrgf1w/image/upload/v1710065864/tsext4d2dnhgka4a4ujv.png"
          className="block w-[186px] h-[39px] mb-[55px]"
          alt=""
        />
        <section className="footer-page-sec flex justify-between text-white">
          <div>
            <h1>Company</h1>
            <ul>
              <li>About us</li>
              <li>Our offerings</li>
              <li>Newsroom</li>
              <li>Partnership</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h1>Job</h1>
            <ul>
              <li>Technology</li>
              <li>Telesales</li>
              <li>Customer Service</li>
              <li>Partnership</li>
              <li>Marketing/Social Media Assistant</li>
              <li>Virtual Administrative Assistant</li>
            </ul>
          </div>
          <div>
            <h1>Employer</h1>
            <ul>
              <li>How it works</li>
              <li>Our offerings</li>
              <li>Newsroom</li>
              <li>Partnership</li>
              <li>Blog</li>
              <li>About us</li>
            </ul>
          </div>
          <div>
            <h1>BPO</h1>
            <ul>
              <li>How it works</li>
              <li>Our offerings</li>
              <li>Newsroom</li>
              <li>Partnership</li>
              <li>Blog</li>
              <li>About us</li>
            </ul>
          </div>
        </section>
        <section className="mt-[266px] mb-[70px] min-h-[23px] flex items-center justify-between text-white">
          <div className="space-x-8 flex text-[23px]">
            <FaInstagram className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaTiktok className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
          <div className="space-x-2 flex items-center cursor-pointer">
            <FaGlobe className="text-[22px]" />
            <p>English</p>
          </div>
        </section>
        <hr className="mb-[34px]" />
        <div className="flex items-center justify-between text-dull-grey text-sm">
          <p>© 2024 Remoting.work Inc.</p>
          <div className="flex items-center gap-x-[27px]">
            <p className="cursor-pointer">Privacy</p>
            <p className="cursor-pointer">Accessibility</p>
            <p className="cursor-pointer">Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
