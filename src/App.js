import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topcomponent from './Pages/Topcomponent';
import SwiperSlider from './Component/Slidermain';
import SearchPage from './Content/Search';
import Header from './layout/header.jsx';
import Navbar from './layout/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import Mainsale from './Content/Product.jsx';
import Account from './Content/SignUp/Account.jsx';

import Shoppingcart from './Content/Shoppingcart.jsx';
import Productdescription from './Component/Productdescription.jsx';

import Orderdetails from './Content/Orderdetail.jsx';
import Signup from './Content/SignUp/Signup.jsx';
import Profilesidebar from './Content/profile.jsx';
import ForgetPassword from './Content/Editpassword/ForgetPassword.jsx';
import Resetpassword from './Content/Editpassword/Resetpassword.jsx';
import Checkout from './Content/CheckOut.jsx';


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
          path="/forgetpassword"
          element={
            <Layout>
              <ForgetPassword/>
            </Layout>
          }
        />
        <Route
        path="/resetpassword"
        element={
          <Layout>
            <Resetpassword/>
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
          path="/orderdetails/:id"
          element={
            <Layout>
              <Orderdetails/>
            </Layout>
          }
        />
                         
      <Route path="/search" element={<SearchPage />} />
      <Route path="/signUp" element=
      {
      <Layout>
      <Signup />
      </Layout>} />
       <Route path="/slider" element={<SwiperSlider/>} /> 
       <Route path="/checkouts" element={<Checkout/>} /> 
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
