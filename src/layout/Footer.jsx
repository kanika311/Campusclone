import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiShoppingTag } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full bg-[#f4dfdb] text-[#676869]">
      {/* Top Section */}
      <div className="bg-[#f7f1f0] h-[93px] w-full flex flex-wrap items-center justify-center md:justify-between px-4 md:px-20">
        <div className="flex items-center gap-2">
          <CiDeliveryTruck />
          <span className="text-[16px] text-[#171717]">Fast Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <CiShoppingTag />
          <span className="text-[16px] text-[#171717]">15 days easy return</span>
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn />
          <span className="text-[16px] text-[#171717]">Track Order</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20 lg:px-32 py-10">
        {/* Column 1 - What's In Store */}
        <div>
          <h3 className="font-semibold mb-3">What's In Store</h3>
          <ul className="space-y-2 text-sm">
            <li>New Arrivals</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Column 2 - Company Info & Policies */}
        <div>
          <h3 className="font-semibold mb-3">Company Info & Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>Blogs</li>
            <li>Sneaker Care</li>
            <li>Corporate</li>
            <li>Terms & Conditions</li>
            <li>Privacy & Cookies Policy</li>
            <li>FAQ's</li>
            <li>Return & Claim Policy</li>
            <li>Contact Us</li>
            <li>Return/Exchange</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Column 3 - Get in Touch */}
        <div>
          <h3 className="font-semibold mb-3">Get In Touch</h3>
          <p className="font-bold text-sm">INSTITUTIONAL Online Order</p>
          <p className="text-sm">Inquiry/Complaint:</p>
          <p className="font-bold text-lg">9667706012</p>
          <p className="text-xs italic">10.00AM to 7:00PM</p>

          <p className="text-sm mt-3">Any Other Queries:</p>
          <p className="font-bold text-lg">9667706012</p>
          <p className="text-xs italic">10.00AM to 7:00PM</p>

          <p className="text-sm mt-3">
            Email: <span className="font-bold">customercare@campusshoes.com</span>
          </p>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Sign up for exclusive offers, original stories, upcoming events and more.
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 border border-gray-400 rounded mb-3"
          />
          <button className="w-[150px] bg-black text-white py-2 rounded">SIGN UP</button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <FaTwitter size={20} />
            <FaWhatsappSquare size={20} />
            <FaFacebookSquare size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="px-4 md:px-20 lg:px-32 py-6">
        <h1 className="text-black font-[400] text-[21px]">Popular Searches</h1>
        <p className="text-[#676869] text-[15px]">
          Men's footwear | Men's Running | Shoes Men's | Walking Shoes | Men's Casual Shoes | Men's
          Sports shoes | Men's Walking Shoes | Men's Casual Shoes | Men's Sneakers | Men's Casual
          Sandals | Men's Sports Sandals | Men's Flip Flops & Slides Men's Flip Flops | Men's Slides
        </p>
        <p className="text-[#676869] text-[15px] mt-2">
          Women's Footwear | Women's Running Shoes | Women's Casual Shoes | Women's Sports Shoes |
          Sneakers Women's | Casual Sandal Women's | Sports Sandal | Women's Flip Flops & Slides
          Women's Flip Flops | Women's Slides
        </p>
        <p className="text-[#676869] text-[15px] mt-2">
          Kid's footwear | Kid's Running Shoes | Kid's Walking Shoes | Kid's Casual Shoes | Kid's
          School Shoes | Kid's Sports Shoes | Kid's Sandals & Floaters Kid's Casual Sandals | Kid's
          Sports Sandals | Kid's Flip Flops & Slides Kid's Flip Flops
        </p>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t-[0.5px] border-[#ecd6d1] w-full flex items-center justify-center py-4">
        <span className="text-[12px] font-[400]">© 2025 Campus Shoes.</span>
      </div>
    </div>
  );
};

export default Footer;
