import React from 'react'
import Products from '../Component/Products'

const Mainsale = () => {
  const typedata={
    saleCategory:"sale",
    NumberOfProduct:"2409",
    image:"https://img.freepik.com/free-vector/colorful-sale-banner-template_1361-1223.jpg?ga=GA1.1.416566523.1736844263&semt=ais_hybrid"
  }
  return (
    <div className='overflow-x-hidden'> 
     <Products  {...typedata}/>
    </div>
  )
}

export default Mainsale