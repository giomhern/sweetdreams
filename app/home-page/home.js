import Locations from "../components/locations";
import Navigation from "../components/nav";
import ParallaxSection from "../components/parallax-component";
import About from "../components/about";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Services from "../components/services";
import SpecialServices from "../components/services_special";
import Contact from "../components/contact";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <div className="relative md:h-[100vh] h-[50vh] md:bg-center bg-top flex items-center justify-center" 
                style={{
                    backgroundImage: 'url(./baby-other.png)', 
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", 
                }}
            >
            <div className="absolute inset-0 bg-blue-300 bg-opacity-20"/>
                
                <div className="relative flex flex-col md:text-right md:justify-right text-center py-5 bg-white px-10 z-10">
                    <h1 className="text-sweetblue md:text-6xl text-4xl font-medium">Martha</h1>
                    <p className="text-sweetblue md:text-2xl text-xl text-center md:text-left font-regular italic">New-Born Care Specialist</p>
                </div>           
            </div>

            <About id="about" />
            <div className= "relative md:h-[100vh] h-[50vh] md:bg-center bg-top flex items-center justify-center" style={{
                backgroundImage: 'url(./baby-hand.jpg)', 
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",  
            }}
            >
                <div className="absolute inset-0 bg-blue-300 bg-opacity-20"/>
                <div className="relative md:px-10 lg:px-7 md:py-5 py-3 px-2 bg-white">
                    <h1 className="text-sweetblue md:text-6xl text-md text-center font-medium">Connecting families with quality care and assurance.</h1>
                </div>           
            </div>
            <Services />
            <SpecialServices />
            <Locations />
            <Contact id="contact" />
        </div>
    )
}

export default HomePage;