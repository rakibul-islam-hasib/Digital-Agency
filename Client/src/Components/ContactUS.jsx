import React from 'react';
import { BiMailSend } from 'react-icons/bi';
const ContactUS = () => {
    return (
        <div className='bg-opacity-90 py-6 flex justify-center items-center bg-[#1B3035] h-auto md:h-80 my-28'>
            <div className="text-center  w-[85%] mx-auto md:w-full flex justify-center items-center flex-col">
                <BiMailSend className='text-8xl text-primary' />
                <h1 className='text-3xl my-4 text-white font-bold'>Ready to get started? Contact us!</h1>
                <p className='text-white'>Sooad is a fully packed practical tool of premium built and design. Let your creativity loose and start building your website now.</p>
                <button className='px-8 py-2 bg-primary font-bold text-white rounded-full mt-5'>Contact Us</button>
            </div>
        </div>
    );
};

export default ContactUS;