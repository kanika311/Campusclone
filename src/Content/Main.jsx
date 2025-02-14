import React from 'react'
import SwiperSlider from '../Component/Slidermain'
import Shoesslider from '../Component/Shoesslider'



const Main = () => {
  return (
    <div className=' h-auto w-[100%]'>
      <SwiperSlider />
      <Shoesslider />
      <div className="md:mt-[60px] md:space-y-0 md:mx-0  mx-[20px] space-y-10">
  {/* Image Grid 1 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-[10px] md:mx-[20px]">
    <img className="w-full h-auto object-cover" src="https://img.freepik.com/free-photo/middle-aged-man-presenting-shoe-shirt-looking-serious-front-view_176474-55062.jpg" alt=""/>
    <img className="w-full h-auto object-cover" src="https://img.freepik.com/free-photo/attractive-woman-holding-roller-skating-hands-pointing-it-with-her-index-finger-posing-against-rosy-wall_176532-7325.jpg" alt=""/>
  </div>

  {/* Image Grid 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-[20px]">
    <img className="w-full h-auto object-cover" src="https://img.freepik.com/free-photo/stylish-woman-isolated-black-suit-holding-pait-shoes_285396-433.jpg" alt=""/>
    <img className="w-full h-auto object-cover" src="https://img.freepik.com/premium-photo/young-woman-holding-roller-skates_1368-123414.jpg" alt=""/>
  </div>

  {/* Explore More */}
  <div className="text-xl font-semibold text-center text-[#171717]">Explore More!</div>

  {/* Image Grid 3 with Text */}
  <div className="grid grid-cols-1 h-auto md:grid-cols-2 gap-4 md:mx-[20px]">
    <div>
      <img className="w-full h-[80%] object-cover" src="https://img.freepik.com/free-photo/kid-having-fun-outdoors_23-2148817360.jpg" alt=""/>
      <p className="mt-3 text-[#787A7C] text-sm md:text-base">AUTUMN WINTER COLLECTION</p>
      <p className="mt-1 text-[#787A7C] text-lg md:text-xl font-semibold">Step In, Stand Out: Shop Vikrant’s faves!</p>
    </div>
    <div>
      <img className="w-full h-[80%] object-cover" src="https://img.freepik.com/free-photo/girl-blouse_1303-4515.jpg" alt=""/>
      <p className="mt-3 text-[#787A7C] text-sm md:text-base">SNEAKERS FOR HER</p>
      <p className="mt-1 text-[#787A7C] text-lg md:text-xl font-semibold">Sneaker Slay: Level up your fashion game! #YouGoGirl</p>
    </div>
  </div>

  {/* Just Kickin' Section */}
  <div className="bg-[#f7f1f0] text-black p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
    {/* Images */}
    <div className="relative w-full md:w-[500px] h-[300px] flex justify-center items-center">
      <img className="md:h-[250px] md:w-[280px] h-[150px] w-[150px] absolute md:top-[50px] top-[30px] md:left-[0px] left-[10px] z-10 shadow-lg" src="https://img.freepik.com/premium-photo/stylish-man-beige-shoes-outdoors_392895-3407.jpg" alt=""/>
      <img className="md:h-[250px] md:w-[280px] h-[150px] w-[150px]  object-cover absolute md:top-[30px] md:left-[200px] top-[120px] left-[100px] z-0" src="https://img.freepik.com/free-photo/close-up-baby-shoe_1203-1642.jpg" alt=""/>
    </div>
    {/* Text & Button */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0 md:mr-[120px]">
      <h1 className="text-2xl text-[#343434] font-semibold">Just Kickin'</h1>
      <span className="text-sm md:text-base text-[#343434]">Explore our Kid's collection!</span>
      <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-[#c16452] transition">Shop Now!</button>
    </div>
  </div>

  {/* Video Section */}
  <div className="w-[100%] h-[400px] md:h-[600px] object-cover overflow-hidden">
    <iframe 
      className="w-full h-full" 
      src="https://www.youtube.com/embed/YvroMs0Sxcw" 
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  </div>
</div>

   
   





    </div>
  )
}

export default Main