import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='max-w-6xl mx-auto h-[80vh] md:h-[90vh] lg:h-[80vh] mt-9 mb-5 relative  rounded-lg'>
            <div className='background-imageerror rounded-lg'></div>
            <div className='overlaydetailserror z-20  rounded-lg'></div>
            <div className='absolute z-10 left-20 top-12 md:left-[170px] md:-top-0 lg:left-64 lg:-top-4'>
                <h1 className='font-extrabold text-[140px] md:text-[220px] lg:text-[350px] text-amber-100'>4</h1>
            </div>
            <div className='absolute z-10 left-[303px] top-9 md:left-[540px] md:-top-4 lg:left-[820px] lg:-top-12'>
                <h1 className='font-extrabold text-[140px] md:text-[220px] lg:text-[350px] text-red-950'>4</h1>
            </div>
            <div className='absolute z-30 left-4 top-20 md:left-32 md:top-24 lg:left-80 lg:top-36 flex flex-col gap-3 lg:gap-6 items-center justify-center'>
                <h1 className='font-semibold text-xl md:text-2xl lg:text-3xl text-emerald-300'>Looks Like </h1>
                <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-[#27bebe]'>Your Page Is Not From This World</h1>
                <Link to='/'><button className='px-2 bg-orange-600 rounded py-1 text-xl font-semibold text-white'>Back To Earth</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;