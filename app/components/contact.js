// pages/contact.js
import { PhoneIcon, MailIcon } from '@heroicons/react/outline';

const Contact = () => {
  return (

    <div className="md:grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center items-center w-full justify-center md:py-24 py-10">
        <div className='pb-10'>
           <h1 className='md:text-6xl text-3xl text-center text-aliceblue pb-4'>Contact Me</h1>
            <p className='md:text-lg text-md text-center text-cyanblue px-14'>I&apos;m here for you anytime, day or night. Reach out, and I&apos;ll get back to you as soon as possible!</p>
        </div>
        <div className='lg:flex-row flex flex-col items-center md:gap-10 gap-5'>
            <div className='flex items-center' >
                <PhoneIcon className="md:h-10 md:w-10 h-5 w-5 mr-3 text-blue-500"/>
                <span className="md:text-2xl text-lg text-cyanblue">+1 (909) 905-9441</span>
            </div>
            <div className="flex items-center">
                <MailIcon className="md:h-10 md:w-10 h-5 w-5 mr-3 text-blue-500"/>
                <a href="mailto:isariomartha37@gmail.com"><span className="md:text-2xl text-lg hover:underline-offset-2 hover:underline text-cyanblue">isariomartha37@gmail.com</span></a>
            </div>
        </div>
    </div>
        /*
        <div className="flex items-center justify-center py-12">
        <div className="p-6 w-full md:w-2/3 flex items-center justify-between">
            <div className="text-2xl font-semibold">Contact Me</div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 mr-3 text-blue-500"/>
                    <span className="text-xl">+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                    <MailIcon className="h-6 w-6 mr-3 text-blue-500"/>
                    <span className="text-xl">martha@email.com</span>
                </div>
            </div>
        </div>
    </div>
    */



  );
}

export default Contact;
