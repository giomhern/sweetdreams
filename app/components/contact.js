/* eslint-disable @next/next/no-img-element */
const Contact = () => {
    return (
        <section id="contact" >
            <div className="lg:flex lg:py-10 justify-center items-center text-left">
                <div className="p-14 px-20 w-1/3">
                    <h1 className="text-5xl text-aliceblue">Contact Me</h1>
                    <p className="text-2xl text-cyanblue">Let&apos;s get in touch!</p>
                </div>
                <div className="flex gap-10 col-span-2 w-2/3">
                    <div className="bg-white p-14 pr-20 w-1/3 ">
                        <h1 className="text-3xl text-aliceblue">Phone</h1>
                        <p className="text-2xl text-cyanblue">+1 (213) 248 - 2342</p>
                    </div>
                    <div className="p-14 pr-20  rounded-lg bg-white w-1/3 ">
                        <h1 className="text-3xl text-aliceblue">Email</h1>
                        <p className="text-2xl text-cyanblue">example@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact; 