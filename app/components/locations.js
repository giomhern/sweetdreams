import React, { useRef, useEffect } from 'react';

const Locations = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        let requestId;
        let position = 0;
        const speed = 0.75;  // Adjust for faster/slower speed
        const elementWidth = scrollRef.current.offsetWidth / 2; // Half, since we duplicated content

        const animateScroll = () => {
            position += speed;
            if (position >= elementWidth) {
                position = 0; // Reset position
            }

            scrollRef.current.style.transform = `translateX(-${position}px)`;
            requestId = requestAnimationFrame(animateScroll);
        };

        requestId = requestAnimationFrame(animateScroll);

        return () => cancelAnimationFrame(requestId);
    }, []);

    return (
        <div id="locations" className="md:py-20 py-10">
            <h1 className="md:text-6xl text-3xl text-aliceblue text-center md:pb-5">Locations</h1>
            <div className="w-full overflow-hidden text-cyanblue pl-28 pt-10">
                <div ref={scrollRef} className="inline-flex">
                    {/* List items */}
                    <ul className="inline-flex space-x-10 items-center text-center justify-center">
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Claremont</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Mount Baldy</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Rancho Cucamonga</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Corona</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Irvine</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Redlands</li>
                        {/* Duplicate the items for infinite scroll effect */}
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Anaheim</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Upland</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Chino Hills</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">La Verne</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Pasadena</li>
                        <li className="md:text-3xl text-md whitespace-nowrap px-10">Santa Monica</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Locations;
