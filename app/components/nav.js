/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const Navigation = () => {
    return (
        <div>
            <nav className="flex justify-between md:py-4 px-5 py-3 md:px-10  w-full">
                <div className='flex md:space-x-5 space-x-2 items-center justify-center'>
                    <Link href="/"><img className='h-[50px] w-[50px] md:h-[80px] md:w-[80px] ' src='./SWEETDREAMS.png' height="80px" width="80px" alt='this is the logo'></img></Link> 
                    <Link href="/"><p className="font-thin text-aliceblue md:text-xl  md:visible invisible text-xs hover:text-lightblue">Home</p></Link>
                    <Link href="#services"><p className="font-thin md:visible invisible text-aliceblue md:text-xl text-xs hover:text-lightblue">Services</p></Link>
                    <Link href="#about"><p className="font-thin md:visible invisible  text-aliceblue md:text-xl text-xs hover:text-lightblue">About Me</p></Link>
                    <Link href="#contact"><p className="font-thin md:visible invisible text-aliceblue md:text-xl text-xs hover:text-lightblue">Contact</p></Link>
                </div>
                    <div className='flex items-center'>
                        <a href="tel:+19099059441" className='items-center justify-center border-aliceblue text-aliceblue md:border-aliceblue md:text-aliceblue hover:text-lightcyan rounded-full md:border-2 border md:px-5 md:py-2 md:text-xl text-md px-3 py-1 hover:border-aliceblue hover:bg-aliceblue hover:cursor'>
                            Book
                        </a>
                    </div>
            </nav>
        </div>
    )
}

export default Navigation;
