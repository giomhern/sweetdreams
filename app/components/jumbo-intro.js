/* eslint-disable @next/next/no-img-element */
const Jumbo = () => {
    return (  
        <div className="relative md:h-[100vh] h-[50vh] md:bg-center bg-top flex items-center justify-center" 
                style={{
                    backgroundImage: 'url(./baby-other.png)', 
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", 
                }}
            >
        <div className="absolute inset-0 bg-lightblue bg-opacity-20"/>
            
            <div className="relative flex flex-col md:text-center md:justify-right text-center py-5 bg-white px-10">
                <h1 className="text-aliceblue md:text-6xl text-4xl font-medium">Martha</h1>
                <p className="text-cyanblue md:text-2xl text-xl text-center md:text-left font-regular italic">New-Born Care Specialist</p>
            </div>           
        </div>
    )
}


export default Jumbo;