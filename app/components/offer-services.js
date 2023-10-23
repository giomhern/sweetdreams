import React from "react";


const SpecialServices = () => {
    return (
        <div id="special-services" className=' px-14 md:py-10 md:p-10 '>
            <h1 className='md:text-6xl text-3xl pb-10 md:text-center text-center text-aliceblue'>But that’s not all, our first 5 Families also get:</h1>
            
            <div className='md:grid md:grid-cols-3 md:space-x-5 flex flex-col gap-y-7 items-center justify-center'>
                <div className='flex-col md:p-10 shadow-lg shadow-blue-100 bg-white p-7'>
                    <div className='flex flex-col items-center justify-center pb-2'>
                        <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em] pb-2" xmlns="http://www.w3.org/2000/svg" fill="#00BFFF" height="5em" width="5em" viewBox="0 0 48 48">
                            <g id="night">
                            <g id="night_2">
                            <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" strokeWidth="0.5" d="M20.7808 39.678C30.2725 41.5227 38.9355 34.9129 39.9084 25.7064C25.3849 34.6376 13.3977 22.6246 22.2943 8.08028C13.086 9.04803 6.46841 17.7148 8.31368 27.2111C9.20895 31.8246 12.2255 35.8586 16.3944 38.1053C16.8806 38.3673 17.0623 38.9738 16.8003 39.46C16.5383 39.9462 15.9318 40.1279 15.4456 39.8659C10.7538 37.3374 7.36096 32.8002 6.35035 27.5923C4.19047 16.477 12.3759 6.3517 23.4224 6.00003C24.3791 5.97168 25.0622 6.89645 24.8058 7.79733L24.6708 8.08611C15.4263 21.6734 26.3363 32.6062 39.8994 23.3282L40.1834 23.1938C41.0866 22.9297 42.0251 23.6154 41.9895 24.5754C41.6379 35.6187 31.5135 43.8013 20.3992 41.6412C19.8571 41.5359 19.503 41.0109 19.6084 40.4688C19.7137 39.9267 20.2386 39.5726 20.7808 39.678ZM12.2323 26.4109C13.1386 31.0805 16.9115 34.8534 21.5811 35.7597C22.1233 35.8649 22.4775 36.3897 22.3723 36.9319C22.267 37.4741 21.7422 37.8283 21.2001 37.7231C15.7297 36.6614 11.3306 32.2623 10.2689 26.7919C10.1637 26.2497 10.5179 25.7249 11.0601 25.6197C11.6022 25.5145 12.127 25.8687 12.2323 26.4109Z" stroke="#00BFFF"/>
                            </g>
                            </g>
                        </svg>
                        <p className='text-xl text-extrabold text-aliceblue'>Two Additional Nights at No Extra Cost</p>
                    </div>
                    <p className='text-lg text-cyanblue'>Enjoy some extra time for self-care or date nights; we&apos;ve got the baby care covered.</p>

                </div>
                <div className='flex-col md:p-10  shadow-lg shadow-blue-100 bg-white p-7'>
                    <div className='flex flex-col items-center justify-center pb-2'>
                       <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em] pb-2" xmlns="http://www.w3.org/2000/svg" fill="none" height="5em" width="5em" viewBox="0 0 24 24"><path d="M15 3V6.4C15 6.96005 15 7.24008 15.109 7.45399C15.2049 7.64215 15.3578 7.79513 15.546 7.89101C15.7599 8 16.0399 8 16.6 8H20M10 8H6C4.89543 8 4 8.89543 4 10V19C4 20.1046 4.89543 21 6 21H12C13.1046 21 14 20.1046 14 19V16M16 3H13.2C12.0799 3 11.5198 3 11.092 3.21799C10.7157 3.40973 10.4097 3.71569 10.218 4.09202C10 4.51984 10 5.0799 10 6.2V12.8C10 13.9201 10 14.4802 10.218 14.908C10.4097 15.2843 10.7157 15.5903 11.092 15.782C11.5198 16 12.0799 16 13.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V7L16 3Z" stroke="#00BFFF" strokeLinejoin="round"/></svg>
                        <p className='text-xl text-extrabold text-aliceblue'>Baby Tracking Worksheet</p>
                    </div>
                    
                    <p className='text-lg text-cyanblue'> Keep track of your baby’s needs with our intuitive and easy-to-use tracking system.</p>

                </div>
                <div className='flex-col md:p-10 shadow-lg shadow-blue-100 bg-white p-7'>
                    <div className='flex flex-col items-center justify-center pb-2'>
                        <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em] pb-2" xmlns="http://www.w3.org/2000/svg" fill="none" height="5em" width="5em" viewBox="0 0 24 24"><path d="M14 13C14 14.1046 13.1046 15 12 15M17 6H17.01M17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13ZM6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21Z" stroke="#00BFFF" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <p className='text-xl text-extrabold text-aliceblue'>Laundry Service for All Baby Necessities</p>
                    </div>
                    
                    <p className='text-lg text-cyanblue'> We will handle all of the laundry necessary to ensure that you have one less task to do.</p>

                </div>
            </div>
        </div>
    )
}

export default SpecialServices;