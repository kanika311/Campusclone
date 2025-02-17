import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topcomponent from './Pages/Topcomponent';
import SwiperSlider from './Component/Slidermain';
import SearchPage from './Content/Search';
import Header from './layout/header.jsx';
import Navbar from './layout/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Mainsale from './Content/Mainsale.jsx';

import Account from './Content/Account.jsx';
import { ShoppingCart } from 'lucide-react';
import Shoppingcart from './Content/Shoppingcart.jsx';
import Productdescription from './Component/Productdescription.jsx';
import Payment from './Content/Payment.jsx';
import Profilesidebar from './layout/Profilesidebar.jsx';
import Orderdetails from './Content/Orderdetails.jsx';

export default function App() {

const Layout = ({ children }) => (

  <div className="flex flex-col min-h-screen">
  {/* 🛠️ Sticky Header + Navbar */}
  <div className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md">
<Header/>
<Navbar  />
</div>


  <div className="flex-1 overflow-x-hidden md:mt-[140px]">
  {children}
  </div>

  
  <div className="w-full bg-gray-100">
    <Footer />
  </div>
</div>
 );
 return (
   <div >
   <Router>
  
      <Routes>
      <Route
          path="/"
          element={
            <Layout>
              <Topcomponent />
            </Layout>
          }
        />
         <Route
          path="/product/:type"
          element={
            <Layout>
              <Mainsale />
            </Layout>
          }
        />
       
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        />
          <Route
          path="/cart"
          element={
            <Layout>
              <Shoppingcart/>
            </Layout>
          }
        />
         <Route
          path="/productdetail/:id"
          element={
            <Layout>
              <Productdescription/>
            </Layout>
          }
        />
          <Route
          path="/orderdetails"
          element={
            <Layout>
              <Orderdetails/>
            </Layout>
          }
        />
                         
      <Route path="/search" element={<SearchPage />} />
       <Route path="/slider" element={<SwiperSlider/>} /> 
       <Route path="/checkouts" element={<Payment/>} /> 
       <Route path="/profile" element={
        <Layout>
            <Profilesidebar/>
        </Layout>
      } /> 


      </Routes>
    </Router>

   </div>
  );
}
