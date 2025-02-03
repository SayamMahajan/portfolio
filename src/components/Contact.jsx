import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import LottieContact from '../assets/Contact.json';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ljaq2m', 'template_a228wfs', form.current, 'f78LtxFhuZABTxMXn')
      .then((response) => {
        alert('Your message has been sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('An error occurred while sending your message. Please try again later.');
      });
  };

  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in touch</h2>
            <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaborations. Feel free to reach out anytime!</p>
            <div className='flex space-x-4'>
              <a href="https://www.instagram.com/sayammahajan14/" className='text-foreground/60 hover:text-foreground/80'>
                <img src="/images/insta.png" alt="insta" className='h-6 w-6'/>
              </a>
              <a href="https://www.linkedin.com/in/sayammahajan8/" className='text-foreground/60 hover:text-foreground/80'>
                <img src="/images/linkedin.png" alt="linkedin" className='h-6 w-6'/>
              </a>
              <a href="https://github.com/SayamMahajan" className='text-foreground/60 hover:text-foreground/80'>
                <img src="/images/githubwhite.png" alt="github" className='h-6 w-6'/>
              </a>
              <a href="https://leetcode.com/u/SayamMahajan/" className='text-foreground/60 hover:text-foreground/80'>
                <img src="/images/Leetcode.png" alt="leetcode" className='h-6 w-6 rounded-sm'/>
              </a>
            </div>
            <Lottie animationData={LottieContact} className='w-[350px] mx-auto lg:w-[500px]'/>
          </div>
          <form ref={form} onSubmit={sendEmail} className='w-full md:w-1/2 bg-gray-100 rounded-lg border-red-300 shadow-lg shadow-red-500 p-10 mx-2'>
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
              <input type='text' name='from_name' id='name' placeholder='Enter Your Name' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus-ring-opacity-50' required/>
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <input type='email' name='from_email' id='email' placeholder='Enter Your Email' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus-ring-opacity-50' required/>
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea name='message' id='message' placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus-ring-opacity-50' required/>
            </div>
            <button type='submit' className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
