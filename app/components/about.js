import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className="md:px-8 md:py-10 md:grid md:grid-cols-2 md:space-x-10 lg:h-[45em] md:justify-center md:items-center flex flex-col justify-center items-center px-5 md:h-96 h-[30em] ">
            <div className="text-center px-10">
                <h1 className="lg:text-7xl text-3xl pb-5 text-left text-aliceblue">Hello, I am Martha!</h1>
            </div>
            <div>
                <p className="lg:text-4xl text-lg text-left text-cyanblue px-8">Hi, my name is Martha. I&apos;m from Mexico where I studied General Nursing and cared for many babies. My passion for pregnancy and newborns has always driven me. I know firsthand the challenges of new motherhood, especially without proper guidance. Drawing from my experiences, I&apos;m dedicated to helping new mothers. With my expertise, I&apos;m here to guide and support them, ensuring a confident bond with their newborn and giving the best start in life.</p>
            </div>
        </div>
    )
}

export default About;   