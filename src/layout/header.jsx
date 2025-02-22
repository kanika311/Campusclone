import React, { useState } from "react";

import campuslogo from '../assets/campuslogo.avif'
import { CiHeart, CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Navbarresp from "./Navbaresponsive";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { GrSearch } from "react-icons/gr";

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/search')
  }
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-4 md:p-6">
       
        {/* 🟢 Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center gap-2 ">
          
        <RxHamburgerMenu
            onClick={() => setNavbarOpen(true)} // Open drawer on click
            color="black"
            size={25}
            className="cursor-pointer "
          />
          <div onClick={handleNavigation} className="flex justify-center items-center gap-2  cursor-pointer">
          <CiSearch size={25} className=" cursor-pointer"/>

          </div>
          {/* 🟢 Mobile Drawer */}
          <Drawer anchor="left" open={isNavbarOpen} onClose={() => setNavbarOpen(false)}>
            <div className="w-64 ">
              <div className="flex items-end justify-end border-b-[1px] border-gray-200 py-4 ">
                <RxCross1 onClick={() => setNavbarOpen(false)} className="mr-[10px]" />
              </div>
              <Navbarresp isMobile={true}/>

              <div className="flex items-center  border-t-[1px] border-gray-200 ">
                <div className="flex space-x-4 mt-6 ml-4">
                  <FaTwitter size={20} />

                  <FaWhatsappSquare size={20} />
                  <FaFacebookSquare size={20} />
                  <FaInstagram size={20} />



                </div>
              </div>
            </div>
          </Drawer>
        </div>

        {/* 🟢 Logo */}
        <div onClick={handleNavigation} className="hidden md:flex justify-center items-center gap-2 hover:text-red-900  cursor-pointer">
          <GrSearch />
          Serach
        </div>
        <div className="flex items-center">
          <img className="w-[90px] md:w-[180px]" src={campuslogo} alt="Campus Logo" />
        </div>

        {/* 🟢 Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/account" className="hover:text-red-900 text-black text-sm">Account</Link>
          
          <Link to="/cart" className="hover:text-red-900 text-black text-sm flex items-center gap-1">
            Cart <CiShoppingCart size={24} />
          </Link>
         
        </div>

        {/* 🟢 Mobile Icons */}
        <div className="md:hidden flex gap-3">
        
          <CiShoppingCart size={25} onClick={()=>{navigate('/cart')}}/>
        
        </div>
      </div>

      {/* 🟢 Bottom Border */}
      <div className="w-full border-b border-gray-200"></div>


    </div>
  );
};



export default Header;
