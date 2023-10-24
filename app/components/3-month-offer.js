const ThreeMonthOffer = () => {
    return (
        <div id="special-services" className=' px-14 md:py-10 md:p-10'>
            <h1 className='md:text-6xl text-3xl py-10 md:text-center text-center text-aliceblue'>Families who choose us for 3 months will be rewarded with:</h1>
            <div className='md:grid md:grid-cols-3 md:space-x-5 flex flex-col gap-y-7 items-center justify-center'>
                <div className='md:col-start-2 flex-col md:p-10 shadow-lg shadow-blue-100 bg-white p-7 hover:scale-105'>
                    <div className='flex flex-col md:gcol items-center justify-center pb-2'>
                        <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em] pb-2" xmlns="http://www.w3.org/2000/svg" fill="#00BFFF" height="5em" width="5em" viewBox="0 0 48 48">
                            <g id="night">
                            <g id="night_2">
                            <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" strokeWidth="2" d="M20.7808 39.678C30.2725 41.5227 38.9355 34.9129 39.9084 25.7064C25.3849 34.6376 13.3977 22.6246 22.2943 8.08028C13.086 9.04803 6.46841 17.7148 8.31368 27.2111C9.20895 31.8246 12.2255 35.8586 16.3944 38.1053C16.8806 38.3673 17.0623 38.9738 16.8003 39.46C16.5383 39.9462 15.9318 40.1279 15.4456 39.8659C10.7538 37.3374 7.36096 32.8002 6.35035 27.5923C4.19047 16.477 12.3759 6.3517 23.4224 6.00003C24.3791 5.97168 25.0622 6.89645 24.8058 7.79733L24.6708 8.08611C15.4263 21.6734 26.3363 32.6062 39.8994 23.3282L40.1834 23.1938C41.0866 22.9297 42.0251 23.6154 41.9895 24.5754C41.6379 35.6187 31.5135 43.8013 20.3992 41.6412C19.8571 41.5359 19.503 41.0109 19.6084 40.4688C19.7137 39.9267 20.2386 39.5726 20.7808 39.678ZM12.2323 26.4109C13.1386 31.0805 16.9115 34.8534 21.5811 35.7597C22.1233 35.8649 22.4775 36.3897 22.3723 36.9319C22.267 37.4741 21.7422 37.8283 21.2001 37.7231C15.7297 36.6614 11.3306 32.2623 10.2689 26.7919C10.1637 26.2497 10.5179 25.7249 11.0601 25.6197C11.6022 25.5145 12.127 25.8687 12.2323 26.4109Z" stroke="#00BFFF"/>
                            </g>
                            </g>
                        </svg>
                        <p className='text-xl text-extrabold text-aliceblue'>Two Additional Nights at No Extra Cost</p>
                    </div>
                    <p className='text-lg text-cyanblue'>Enjoy some extra time for self-care or date nights; we&apos;ve got the baby care covered.</p>
                </div>
            </div>
        </div>
    )
}

export default ThreeMonthOffer;