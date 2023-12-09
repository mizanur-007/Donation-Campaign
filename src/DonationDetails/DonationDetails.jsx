import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    const [donationDetail, setDonationDetail] = useState({});
    const {id} = useParams();
    const idInt = parseInt(id,10)
    const allDonations = useLoaderData();

    useEffect(()=>{
        const donationDetailFind = allDonations.find(item => item.id==idInt)
        setDonationDetail(donationDetailFind);

    },[])
    const {color_text_button, picture, title,description, price} = donationDetail

    const btnStyle = {
        backgroundColor : color_text_button
      };

      const handleDonate = (donationDetail)=>{
        let donationsData = [];
           const getLocalData = JSON.parse(localStorage.getItem("donations"))||[];
           if(!getLocalData){
               donationsData.push(donationDetail);
               localStorage.setItem("donations",JSON.stringify(donationsData));
           }
           else{
            const isExist = getLocalData.find(item => item.id==donationDetail.id);
            if(!isExist){
            donationsData = [...getLocalData,donationDetail]
            localStorage.setItem("donations",JSON.stringify(donationsData));
            return toast.success("Donation Completed. So kind of you", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000, 
                hideProgressBar: false, 
                closeOnClick: true, 
                pauseOnHover: true,
                draggable: true
              })
            }
            else{
            donationsData = [...getLocalData]
            localStorage.setItem("donations",JSON.stringify(donationsData));
            }
            toast.error("You have already donated. Thank You", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000, 
                hideProgressBar: false, 
                closeOnClick: true, 
                pauseOnHover: true,
                draggable: true
              })
           }
      }

    return (
        <>
        <div className='max-w-6xl mx-auto mt-12 mb-20 rounded-lg px-3 lg:px-0'>
            <div className='relative'>
                <img className='md:h-96 lg:h-[420px] w-full rounded-lg' src={picture} alt="" />
            </div>
            <div className='overlaydetails -bottom-[18px] md:-bottom-[153px] lg:bottom-[32px] rounded-b-lg'>
                 
            </div>
            <div>
                <button onClick={()=>handleDonate(donationDetail)} style={btnStyle} className='absolute -bottom-[4px] left-7 md:-bottom-[136px] lg:bottom-[57px] lg:left-20 text-white z-10 py-2 px-4 rounded text-lg font-medium'>Donate ${price}.00</button>
                </div>
            <h1 className='text-[#0B0B0B] text-4xl font-bold mt-12'>{title}</h1>
            <p className='text-[#0b0b0bb3] my-4'>{description}</p>
        </div>
        <ToastContainer />
        </>
    );
};

export default DonationDetails;