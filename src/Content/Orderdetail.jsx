import { Button, Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { Box } from 'lucide-react';
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { OrderApi } from '../mocks/order';
import { CartApi } from '../mocks/Cart';



const Orderdetail = () => {
    const [isChatBox, setChatBox] = useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [isOrderDetail, setOrderDetail] = useState('');
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }; const steps = [
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
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params, 'params');
    const orderId = params?.id;
    const { OrderList } = useSelector((state) => state.order);
    console.log(OrderList, "list")
    const fetchOrder = async () => {
        let arr;
        for (let order of OrderList) {
            for (let k of order.products) {
                if (k.id === orderId)
                    arr = { ...k }
            }
        }
        setOrderDetail({ ...arr })

    }

    useEffect(() => {

        fetchOrder()
    }, [dispatch,orderId,OrderList])
    console.log(isOrderDetail, "order show")




    //  chatting
    const handleChat = async () => {
   
    
        const userMessage = { text: input, sender: "user" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
    
        const data = {
            "contents": [{ "parts": [{ "text": input }] }]
        };
    
        try {
            const response = await CartApi.chat(data);
           
    
            const botReply = response?.candidates?.[0]?.content?.parts?.[0]?.text;
       
    
            const finalMessage = botReply || "I'm sorry, I didn't understand that.";  
            setMessages((prevMessages) => [...prevMessages, { text: finalMessage, sender: "bot" }]);
    
        } catch (error) {
        
            setMessages((prevMessages) => [...prevMessages, { text: "Failed to get response. Try again.", sender: "bot" }]);
        }
    
        setInput('');
    };
    
    
    

    return (
        <div>
        {isChatBox ? (
            <div className=" bottom-16 right-5 bg-white  shadow-xl rounded-lg overflow-hidden border border-gray-300 md:w-[95%] md:m-[20px] mt-[70px] w-[95%] mx-[10px] h-[100%] p-[40px]">

                <div className="flex justify-between items-center bg-blue-600 text-white p-3">
                    <span>Live Chat</span>
                    <IoClose size={22} className="cursor-pointer" onClick={() => setChatBox(false)} />
                </div>

                 {/* Chat Messages */}
                 <div className="h-60 overflow-y-auto p-3 flex flex-col">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-2 rounded-lg max-w-[75%] ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>

                {/* Chat Input */}
                <div className="flex items-center p-2 border-t">
                    <input
                        type="text"
                        className="flex-1 p-2 border rounded-l-lg focus:outline-none"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}

                    />
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
                        onClick={handleChat}
                    >
                        Send
                    </button>
                </div>
            </div>
        ):(

        <div className='grid md:grid-cols-10 grid-rows mx-[10px] md:my-[30px] my-[60px] '>
            <div className="md:col-span-7 row-span mx-[30px] b">
                <Card className="p-4 mt-[20px]">
                    <CardContent className="flex flex-col items-center gap-4">
                        {/* Product Image */}
                        <div className="flex items-center  justify-between  w-full">

                            {/* Product Info */}
                            <div className="flex-1">
                                <h3 className="text-[black] font-semibold">{isOrderDetail?.productId?.title?.shortTitle}</h3>
                                <p className="flex md:hidden text-gray-500 text-sm">White</p>
                                <p className="md:flex hidden  text-gray-500 text-sm">size:6</p>

                                <p className="md:flex hidden text-gray-500 text-sm">QTY:{isOrderDetail?.qty} </p>

                            </div>
                            <img src={isOrderDetail?.productId?.image} alt="Sneaker" className="w-16 h-16 object-cover" />

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

                        <h3 onClick={() => { setChatBox(prev => !prev); }} className="text-[black] font-semibold border-t-[1px] w-full flex items-center justify-center gap-1 p-2"><IoChatbubblesOutline size={20} />Chat with Us</h3>

                       



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
                                {isOrderDetail?.addressId?.name}{isOrderDetail?.addressId?.lastName}
                            </Typography>
                            <Typography variant="body2">
                                {isOrderDetail?.addressId?.locality}<br />
                                {isOrderDetail?.addressId?.city}<br />



                                <br />
                                {isOrderDetail?.addressId?.country} -   {isOrderDetail?.addressId?.zipcode}


                            </Typography>
                            <Typography variant="body2" >
                                Phone number: {isOrderDetail?.addressId?.phone}

                            </Typography>
                        </CardContent>

                    </Card>
                </div>
                <div className='md:row-span-5 md:items-start md:justify-start flex items-center justify-center'>

                    <Card sx={{ maxWidth: 280, minWidth: 280 }}>
                        <CardContent >
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} className='border-b-[1px] p-2'>
                                Price details
                            </Typography>
                            <Typography variant="body2" component="div" >
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center justify-between'>

                                        Cost price
                                        <span>Rs.{isOrderDetail?.productId?.price?.mrp}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        Discount
                                        <span>{isOrderDetail?.productId?.price?.discount}%</span>
                                    </div>
                                    <div className='flex items-center justify-between'>

                                        Selling Price
                                        <span>Rs.{isOrderDetail?.productId?.price?.cost}</span>
                                    </div>
                                </div>

                            </Typography>



                            <Typography variant="body2" component="div" className='border-t-[1px] p-2'>

                                <div className='flex items-center justify-between'>

                                    Total
                                    <span>Rs.{isOrderDetail?.productId?.price?.cost}</span>
                                </div>
                            </Typography>
                            <Typography variant="body2" component="div" className='border-t-[1px] p-2'>

                                <div className='flex items-center justify-between'>

                                    Cash On delivery
                                    <span>Rs.{isOrderDetail?.productId?.price?.cost}</span>
                                </div>
                            </Typography>


                        </CardContent>

                    </Card>

                </div>
            </div>
            
        </div>
     ) }
     </div>
                       
    )
}

export default Orderdetail