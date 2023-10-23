import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className="md:px-8 md:py-10 md:grid md:grid-cols-2 md:space-x-10 md:h-[40em] md:justify-center md:items-center flex flex-col justify-center items-center px-5 text-sweetred h-96">
            <div className="text-center px-10">
                <h1 className="lg:text-7xl text-3xl pb-5 text-left text-aliceblue">Hello, I am Martha!</h1>
            </div>
            <div>
                <p className="lg:text-4xl text-left text-cyanblue">As a newborn care specialist, I have a passion for helping new parents navigate the challenges of caring for their little ones. With years of experience and a deep understanding of infant development, I provide expert guidance on everything from feeding and sleeping to soothing and playtime. My goal is to empower parents with the knowledge and skills they need to give their babies the best possible start in life.</p>
            </div>
        </div>
    )
}

export default About;   