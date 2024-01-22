import React from "react";
const SpecialServices = () => {
    return (
        <div id="special-services" className=' px-14 md:py-10 md:p-10'>
            <h1 className='md:text-6xl text-3xl pb-10 md:text-center text-center text-aliceblue'>But that’s not all, call for special offers:</h1>
            <div className=' md:max-w-2xl md:m-auto flex flex-col md:gap-7 gap-y-7'>
                <div className='flex-col md:p-10  shadow-lg shadow-blue-100 bg-white p-7 md:hover:scale-105'>
                    <div className='flex flex-col items-center justify-center pb-2'>
                       <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em] pb-2" xmlns="http://www.w3.org/2000/svg" fill="none" height="5em" width="5em" viewBox="0 0 24 24"><path d="M15 3V6.4C15 6.96005 15 7.24008 15.109 7.45399C15.2049 7.64215 15.3578 7.79513 15.546 7.89101C15.7599 8 16.0399 8 16.6 8H20M10 8H6C4.89543 8 4 8.89543 4 10V19C4 20.1046 4.89543 21 6 21H12C13.1046 21 14 20.1046 14 19V16M16 3H13.2C12.0799 3 11.5198 3 11.092 3.21799C10.7157 3.40973 10.4097 3.71569 10.218 4.09202C10 4.51984 10 5.0799 10 6.2V12.8C10 13.9201 10 14.4802 10.218 14.908C10.4097 15.2843 10.7157 15.5903 11.092 15.782C11.5198 16 12.0799 16 13.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V7L16 3Z" stroke="#00BFFF" strokeLinejoin="round" strokeWidth="2"/></svg>
                        <p className='text-xl text-extrabold text-aliceblue'>Baby Tracking Worksheet</p>
                    </div>
                    <p className='text-lg text-cyanblue'> Keep track of your baby’s needs with our intuitive and easy-to-use tracking system.</p>
                </div>
            </div>
            <div className='flex items-center justify-center md:pt-10 pt-5'>
                <a href="tel:+19099059441" className='text-center items-center md:max-w-7xl justify-center border-aliceblue text-aliceblue md:border-aliceblue md:text-aliceblue hover:text-lightcyan rounded-full md:border-2 border md:px-10 md:py-5 md:text-3xl text-lg px-3 py-2 hover:border-aliceblue hover:bg-aliceblue hover:cursor'>
                    Call Now
                </a>
            </div>

        </div>
    )
}
export default SpecialServices;