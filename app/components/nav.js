/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';



const Navigation = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [wordVisible, setWordVisible] = useState(false);
    const sectionRef = useRef(null); // Reference to the section beyond which you want to hide the nav.

    useEffect(() => {
        const handleScroll = () => {
        if (sectionRef.current) {
            if (window.scrollY > window.innerHeight / 2) {
            setIsVisible(false);
            } else {
            setIsVisible(true);
            }
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={sectionRef}>
            {isVisible ?
                <nav className={`flex transition-opacity duration-500 ease-in-out justify-between md:py-4 px-5 py-2 md:px-10 fixed z-10 bg-transparent w-full ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className='flex md:space-x-5 space-x-2 items-center justify-center text-gray-400'>
                        {/*<Link href="/"><img src='./sweet-logo.png' height="80px" width="80px" alt='this is the logo'></img></Link> */}
                        <Link href="/"><p className="font-thin text-gray-800 md:visible invisible md:text-xl text-xs hover:text-gray-600">Home</p></Link>
                        <Link href="#services"><p className="font-thin md:visible invisible text-gray-800 md:text-xl text-xs hover:text-gray-600">Services</p></Link>
                        <Link href="#about"><p className="font-thin md:visible invisible  text-gray-800 md:text-xl text-xs hover:text-gray-600">About Me</p></Link>
                        <Link href="#contact"><p className="font-thin md:visible invisible text-gray-800 md:text-xl text-xs hover:text-gray-600">Contact</p></Link>
                    </div>
                        <div className='flex items-center'>
                            <a href="tel:+19099059441" className='items-center justify-center border-gray-800 text-gray-800 rounded-full md:border-2 border md:px-5 md:py-2 md:text-xl text-xs px-3 py-1 text-sweet hover:text-white hover:bg-gray-800 hover:cursor'>
                                Book
                            </a>
                        </div>
                </nav>: null
            }
        </div>



    )
}

export default Navigation;
