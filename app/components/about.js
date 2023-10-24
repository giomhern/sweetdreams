import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className="md:px-8 md:py-10 md:grid md:grid-cols-2 md:space-x-10 md:h-[50em] md:justify-center md:items-center flex flex-col justify-center items-center px-5 h-[40em]">
            <div className="text-center px-10">
                <h1 className="lg:text-7xl text-3xl pb-5 text-left text-aliceblue">Hello, I am Martha!</h1>
            </div>
            <div>
                <p className="lg:text-4xl text-lg text-left text-cyanblue">Hi, my name is Martha. I&apos;m originally from Mexico where I completed my studies in General Nursing, and had the privilege of caring for numerous babies. My passion for the miracles of pregnancy and newborns is deep-seated, and it&apos;s likely the reason I&apos;m in this field today. From my own journey, I understand the overwhelming feelings that come with new motherhood, especially when one lacks proper guidance. My personal experiences in navigating motherhood without the support I needed drives my dedication to this profession. With my vast experience and a genuine passion for infant care, I&apos;m committed to guiding and empowering new mothers through their transformative journey, ensuring they bond confidently with their newest family members and providing the expert advice necessary for the best start in life.</p>
            </div>
        </div>
    )
}

export default About;   