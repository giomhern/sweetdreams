import React from 'react';
import Image from 'next/image';

const Services = () => {
    return (
        <div id="services" className='text-sweetred md:py-20 py-10 px-14'>
            <h1 className='md:text-6xl text-3xl md:pb-5 pb-3 text-center text-aliceblue'>Services</h1>
            <p className='md:text-xl text-lg text-aliceblue md:text-center text-center pb-5 md:pb-10'>
                Feeling overwhelmed by the challenges of new parenthood? Trust us, you&apos;re not alone—and we&apos;ve got the perfect solution!
                
            </p>
            <div className='md:grid md:grid-cols-2 md:max-w-7xl md:m-auto flex flex-col md:gap-7 gap-y-5'>

                <div className='flex-col bg-white rounded-lg md:hover:scale-105 md:p-10 px-4 py-6 shadow-lg shadow-blue-100 '>
                    <div className='flex flex-col bg-white space-y-2 items-center md:justify-left justify-center pb-3'>
                        <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em]" xmlns="http://www.w3.org/2000/svg" fill="#00BFFF" height="5em" width="5em" viewBox="0 0 1024 1024">
                            <path d="M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z" strokeWidth="0.5"/>
                        </svg>
                        <p className='text-xl text-extrabold text-aliceblue'>Light Cooking & Housekeeping</p>
                    </div>
                    <p className='text-lg text-cyanblue'>Come home to a tidy space and a home-cooked soup, so you can enjoy quality time with your family without distractions.</p>
                </div>

                <div className='flex-col bg-white rounded-lg  md:hover:scale-105 md:p-10 px-4 py-6 shadow-lg shadow-blue-100'>
                    <div className='flex flex-col bg-white  space-y-2 items-center md:justify-left justify-center pb-3'>
                        <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em]" xmlns="http://www.w3.org/2000/svg" fill="#00BFFF" height="5em" width="5em" viewBox="0 0 24 24"><path d="M20.492,10.04a8.987,8.987,0,0,0-6.376-5.788A1.583,1.583,0,0,1,15,4a1,1,0,0,0,0-2,3.541,3.541,0,0,0-3.27,2.011A8.979,8.979,0,0,0,3.508,10.04a3,3,0,0,0,0,5.92,8.99,8.99,0,0,0,16.984,0,3,3,0,0,0,0-5.92ZM20.007,14l-.137-.018a1.007,1.007,0,0,0-1.1.747,6.99,6.99,0,0,1-13.55,0,1,1,0,0,0-.968-.754c-.042,0-.084,0-.127.007L4,14a1,1,0,0,1-.008-2l.133.017a1,1,0,0,0,1.1-.745,6.976,6.976,0,0,1,5.847-5.194A6.581,6.581,0,0,0,11,7a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,5.492,5.492,0,0,1,.1-.91,6.982,6.982,0,0,1,5.676,5.179,1,1,0,0,0,1.1.745L20.006,12a1,1,0,0,1,0,2ZM10.5,13A1.5,1.5,0,1,1,9,11.5,1.5,1.5,0,0,1,10.5,13Zm6,0A1.5,1.5,0,1,1,15,11.5,1.5,1.5,0,0,1,16.5,13Z" strokeWidth="0.5"/></svg>
                        <p className='text-lg text-extrabold text-aliceblue'>60 Hours of Expert Newborn Care Weekly</p>
                    </div>
                     <p className='text-lg text-cyanblue'>Kiss sleepless nights goodbye with round-the-clock expert care for your baby.</p>
                </div>


                <div className='flex-col bg-white rounded-lg  md:hover:scale-105 md:p-10 px-4 py-6 shadow-lg shadow-blue-100'>
                    <div className='flex flex-col bg-white  space-y-2 items-center md:justify-left justify-center pb-3'>
                        <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em]" xmlns="http://www.w3.org/2000/svg" height="5em" width="5em" fill="#00BFFF" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.4832 15.0004C19.4722 13.5203 20 11.7803 20 10.0002V8.23631C20 7.85754 20.214 7.51128 20.5528 7.34189L21.4472 6.89467C21.9412 6.64768 22.1414 6.04701 21.8944 5.55303C21.6474 5.05905 21.0468 4.85883 20.5528 5.10582L19.6584 5.55303C18.642 6.06121 18 7.1 18 8.23631V9.00024L12 9.00024V2.00024C12 1.44796 11.5523 1.00024 11 1.00024C9.21996 1.00024 7.47991 1.52808 5.99986 2.51702C4.51982 3.50595 3.36627 4.91156 2.68508 6.55609C2.00389 8.20063 1.82566 10.0102 2.17293 11.7561C2.5202 13.5019 3.37736 15.1055 4.63604 16.3642C4.88278 16.611 5.14279 16.8423 5.41453 17.0573C4.03795 17.3297 3 18.5437 3 20.0002C3 21.6571 4.34314 23.0002 6 23.0002C7.65685 23.0002 9 21.6571 9 20.0002C9 19.5356 8.89434 19.0955 8.70575 18.7029C8.88354 18.7498 9.0631 18.7913 9.24418 18.8273C10.5913 19.0953 11.9763 19.0504 13.2942 18.7029C13.1057 19.0955 13 19.5356 13 20.0002C13 21.6571 14.3431 23.0002 16 23.0002C17.6569 23.0002 19 21.6571 19 20.0002C19 18.5437 17.962 17.3297 16.5855 17.0573C17.3175 16.4779 17.9589 15.785 18.4832 15.0004ZM16.7834 13.8646C17.3611 13.0001 17.7352 12.0209 17.8834 11.0002L4.11656 11.0002C4.13389 11.1195 4.15435 11.2386 4.17795 11.3572C4.44634 12.7065 5.10881 13.9459 6.08158 14.9187C7.05435 15.8914 8.29374 16.5539 9.64301 16.8223C10.9923 17.0907 12.3908 16.9529 13.6618 16.4265C14.9328 15.9 16.0191 15.0085 16.7834 13.8646ZM10 3.1168V9.00024L4.11656 9.00024C4.19904 8.43247 4.35188 7.87411 4.57377 7.33842C5.10023 6.06743 5.99176 4.9811 7.13562 4.2168C8.0001 3.63917 8.97936 3.26508 10 3.1168ZM6 21.0079C5.44349 21.0079 4.99235 20.5568 4.99235 20.0002C4.99235 19.4437 5.44349 18.9926 6 18.9926C6.5565 18.9926 7.00764 19.4437 7.00764 20.0002C7.00764 20.5568 6.5565 21.0079 6 21.0079ZM14.9924 20.0002C14.9924 20.5568 15.4435 21.0079 16 21.0079C16.5565 21.0079 17.0076 20.5568 17.0076 20.0002C17.0076 19.4437 16.5565 18.9926 16 18.9926C15.4435 18.9926 14.9924 19.4437 14.9924 20.0002Z" strokeWidth="0.5"/>
                        </svg>
                        <p className='text-xl text-extrabold text-aliceblue'>Expert Baby Carrier Training </p>
                    </div>
                    <p className='text-lg text-cyanblue'> We will teach you the techniques and best practices to use our Premium Baby Carrier.</p>
                </div>


                <div className='flex-col bg-white rounded-lg  md:hover:scale-105 md:p-10 px-4 py-6 shadow-lg shadow-blue-100'>
                    <div className='flex flex-col bg-white  space-y-2 items-center md:justify-left justify-center pb-3'>
                        <svg className="md:h-[4em] md:w-[4em] h-[2.5em] w-[2.5em]" xmlns="http://www.w3.org/2000/svg" height="5em" width="5em" viewBox="0 0 24 24" fill="#00BFFF"><path fillRule="evenodd" clipRule="evenodd" d="M5.77952 7.96877C5.98236 7.95589 6.19198 7.91812 6.40682 7.85234C7.67428 7.46428 8.84318 6.87012 9.9597 6.19937C10.495 6.69621 11.212 7 12 7C12.788 7 13.505 6.69621 14.0403 6.19937C15.1568 6.87012 16.3257 7.46428 17.5932 7.85234C17.808 7.91812 18.0176 7.9559 18.2205 7.96877C18.7956 8.67891 19.2517 9.48957 19.5581 10.3705L19.7526 10.9295L20.3363 11.028C21.2806 11.1873 22 12.0106 22 13C22 13.9894 21.2806 14.8127 20.3363 14.972L19.7526 15.0705L19.5581 15.6295C18.47 18.7574 15.4956 21 12 21C8.5044 21 5.53 18.7574 4.44191 15.6295L4.24743 15.0705L3.66374 14.972C2.71943 14.8127 2 13.9894 2 13C2 12.0106 2.71943 11.1873 3.66374 11.028L4.24743 10.9295L4.44191 10.3705C4.74833 9.48957 5.20437 8.6789 5.77952 7.96877ZM3.84698 7.20867C3.31764 6.66995 3 5.91062 3 5.14331V2.85668C3 1.191 4.49687 -0.437102 6.40682 0.147661C7.67428 0.535716 8.84318 1.12988 9.9597 1.80063C10.495 1.30379 11.212 1 12 1C12.788 1 13.505 1.30379 14.0403 1.80063C15.1568 1.12988 16.3257 0.535717 17.5932 0.147661C19.5031 -0.437102 21 1.19101 21 2.85669V5.14332C21 5.91062 20.6824 6.66996 20.153 7.20867C20.5912 7.82449 20.9614 8.49203 21.2525 9.2003C22.8483 9.72617 24 11.2278 24 13C24 14.7722 22.8483 16.2738 21.2525 16.7997C19.7572 20.437 16.1791 23 12 23C7.82089 23 4.24277 20.437 2.74747 16.7997C1.15171 16.2738 0 14.7722 0 13C0 11.2278 1.15171 9.72616 2.74746 9.2003C3.03864 8.49202 3.40879 7.82449 3.84698 7.20867ZM9.02981 3.5755C7.95632 2.92419 6.91276 2.3942 5.82131 2.06004C5.61971 1.99831 5.44327 2.04373 5.29221 2.17381C5.12838 2.31488 5 2.55925 5 2.85668V5.14331C5 5.44074 5.12838 5.68512 5.29221 5.82619C5.44327 5.95627 5.61971 6.00168 5.82131 5.93996C6.91276 5.6058 7.95632 5.0758 9.02981 4.4245C9.01016 4.28582 9 4.1441 9 4C9 3.8559 9.01016 3.71418 9.02981 3.5755ZM18.1787 5.93996C17.0872 5.6058 16.0437 5.07581 14.9702 4.4245C14.9898 4.28582 15 4.1441 15 4C15 3.8559 14.9898 3.71418 14.9702 3.5755C16.0437 2.9242 17.0872 2.3942 18.1787 2.06004C18.3803 1.99831 18.5567 2.04373 18.7078 2.17381C18.8716 2.31488 19 2.55926 19 2.85669V5.14332C19 5.44075 18.8716 5.68512 18.7078 5.8262C18.5567 5.95627 18.3803 6.00169 18.1787 5.93996ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4ZM10.8944 16.5528C10.6474 16.0588 10.0468 15.8586 9.55279 16.1056C9.05881 16.3526 8.85858 16.9532 9.10557 17.4472C9.68052 18.5971 10.9822 19 12 19C13.0178 19 14.3195 18.5971 14.8944 17.4472C15.1414 16.9532 14.9412 16.3526 14.4472 16.1056C13.9532 15.8586 13.3526 16.0588 13.1056 16.5528C13.0139 16.7362 12.6488 17 12 17C11.3512 17 10.9861 16.7362 10.8944 16.5528ZM16.5 13C16.5 13.8284 15.8284 14.5 15 14.5C14.1716 14.5 13.5 13.8284 13.5 13C13.5 12.1716 14.1716 11.5 15 11.5C15.8284 11.5 16.5 12.1716 16.5 13ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5Z" strokeWidth="0.5"/></svg>
                        <p className='text-xl text-extrabold text-aliceblue'>1-on-1 Customized Newborn Training</p>
                    </div>
                    <p className='text-lg text-cyanblue'>We will help you become an expert in newborn care essentials that set the stage for a healthy, happy baby.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;