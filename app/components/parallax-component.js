import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxSection = () => {
    return (
            <Parallax pages={1} enabled={true}>
            <ParallaxLayer 
            speed={1}
            offset={0}
            factor={1}

            style={{
                backgroundImage: 'url(./baby-other.png)', 
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                }}
            >
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} speed={0.5} factor={0.5}>
                <div className="flex flex-col sm:justify-center md:text-right pr-10">
                    <h1 className="text-gray-800 md:text-6xl font-medium">Martha O&apos;Campos</h1>
                    <p className="text-gray-800 md:text-2xl font-regular italic">New-Born Care Specialist</p>
                </div>
            </ParallaxLayer>
            </Parallax>
    )
}

export default ParallaxSection;