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
                        <li className="md:text-3xl text-md px-10">Los Angeles</li>
                        <li className="md:text-3xl text-md px-10">San Bernardino</li>
                        <li className="md:text-3xl text-md px-10">Hollywood</li>
                        <li className="md:text-3xl text-md px-10">Inglewood</li>
                        <li className="md:text-3xl text-md px-10">Koreatown</li>
                        <li className="md:text-3xl text-md px-10">Northridge</li>
                        {/* Duplicate the items for infinite scroll effect */}
                        <li className="md:text-3xl text-md px-10">Los Angeles</li>
                        <li className="md:text-3xl text-md px-10">San Bernardino</li>
                        <li className="md:text-3xl text-md px-10">Hollywood</li>
                        <li className="md:text-3xl text-md px-10">Inglewood</li>
                        <li className="md:text-3xl text-md px-10">Koreatown</li>
                        <li className="md:text-3xl text-md px-10">Northridge</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Locations;
