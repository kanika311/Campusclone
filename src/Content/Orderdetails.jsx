import { Button, Card,  CardContent, Typography } from '@mui/material'
import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { Box } from 'lucide-react';
import { IoChatbubblesOutline } from "react-icons/io5";



const Orderdetails = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };const steps = [
        {
         
          description: "Order ConfirmedWed, 5th Feb '25",
        },
        {
            description: "Your Order has been placed.Wed, 5th Feb '25 - 5:11pm",
        },
        {
            description: "CancelledThu, 6th Feb '25 You requested a cancellation due to quality issues with the product.Thu, 6th Feb '25 - 9:16am",
        },
      ];
      
     
   
    return (
        <div className='grid md:grid-cols-10 grid-rows mx-[10px] md:my-[30px] my-[60px] '>
            <div className="md:col-span-7 row-span mx-[30px] b">
                <Card className="p-4 mt-[20px]">
                    <CardContent className="flex flex-col items-center gap-4">
                        {/* Product Image */}
                        <div className="flex items-center  justify-between  w-full">

                            {/* Product Info */}
                            <div className="flex-1">
                                <h3 className="text-[black] font-semibold">Raasile White Women Sneakers</h3>
                                <p className="flex md:hidden text-gray-500 text-sm">White</p>
                                <p className="md:flex hidden  text-gray-500 text-sm">size:6</p>

                                <p className="md:flex hidden text-gray-500 text-sm">QTY:1 </p>
                               
                            </div>
                            <img src='https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570' alt="Sneaker" className="w-16 h-16 object-cover" />

                        </div>
                        <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.description}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.description}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
           
            </StepContent>
          </Step>
        ))}
      </Stepper>

                                <h3 className="text-[black] font-semibold border-t-[1px] w-full flex items-center justify-center gap-1 p-2"><IoChatbubblesOutline size={20}/>Chat with Us</h3>

                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-3 row-span  grid-rows-10 my-[20px] ">
            <div className='md:row-span-5 md:items-start md:justify-start flex items-center justify-center mb-[20px]'>

<Card sx={{ maxWidth: 280 }}>

                        <CardContent >
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} className='border-b-[1px] p-2'>
                                Shipping details
                            </Typography>

                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                                Khushi Aggarwal
                            </Typography>
                            <Typography variant="body2">
                                House no .53

                                Moh .chauhnan jwalapur haridwar paliwal street, Near seth ganga parshad school
                                <br />
                                Haridwar
                                <br />
                                Uttarakhand - 249407


                            </Typography>
                            <Typography variant="body2" >
                                Phone number: 7895726762
                            </Typography>
                        </CardContent>

                    </Card>
                </div>
                <div className='md:row-span-5 md:items-start md:justify-start flex items-center justify-center'>

                    <Card sx={{ maxWidth: 280,minWidth:280 }}>
                        <CardContent >
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} className='border-b-[1px] p-2'>
                                Price details
                            </Typography>
                            <Typography variant="body2" component="div" >
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center justify-between'>

                                        Selling price
                                        <span>Rs.788</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        Handling price
                                        <span>Rs.60</span>
                                    </div>
                                    <div className='flex items-center justify-between'>

                                        Platform fee
                                        <span>Rs.4</span>
                                    </div>
                                </div>

                            </Typography>



                            <Typography variant="body2" component="div" className='border-t-[1px] p-2'>

                                <div className='flex items-center justify-between'>

                                    Total
                                    <span>Rs.1000</span>
                                </div>
                            </Typography>
                            <Typography variant="body2" component="div" className='border-t-[1px] p-2'>

                                <div className='flex items-center justify-between'>

                                    Cash On delivery
                                    <span>Rs.1000</span>
                                </div>
                            </Typography>


                        </CardContent>

                    </Card>

                </div>
            </div>
        </div>
    )
}

export default Orderdetails