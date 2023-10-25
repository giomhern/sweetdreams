import React, { useRef, useEffect } from 'react';

const Certs = () => {
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
        <div id="locations" className=" pb-16 md:pb-32">
            <h1 className="md:text-6xl text-3xl text-aliceblue text-center md:pb-5">Qualifications</h1>
            <div className="w-full overflow-hidden text-cyanblue pl-28 pt-10">
                <div ref={scrollRef} className="inline-flex">
                    {/* List items */}
                    <ul className="inline-flex space-x-10 items-center text-center justify-center">
                        <li className="md:text-3xl text-md px-10">Caregiver</li>
                        <li className="md:text-3xl text-md px-10">CPR</li>
                        <li className="md:text-3xl text-md px-10">PT Aide</li>
                        <li className="md:text-3xl text-md px-10">Medical Assistant</li>
                        <li className="md:text-3xl text-md px-10">LVN Equivalent</li>
                        <li className="md:text-3xl text-md px-10">Resources for Infant Educators</li>
                        {/* Duplicate the items for infinite scroll effect */}
                        <li className="md:text-3xl text-md px-10">IDSA</li>
                        <li className="md:text-3xl text-md px-10">Newborn Care Specialist</li>
                        <li className="md:text-3xl text-md px-10">Proper Breastfeeding</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Certs;