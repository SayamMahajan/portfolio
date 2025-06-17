import React, { useRef, lazy, Suspense, useEffect } from "react";

// Lazy load Lottie for better performance
const Lottie = lazy(() => import("lottie-react"));
import ContactAnimation from "../assets/Contact.json";

const Contact = () => {
  const form = useRef();

  // Preload Lottie to avoid delay
  useEffect(() => {
    import("lottie-react");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const emailjs = await import("emailjs-com");
      await emailjs.sendForm(
        "service_3ljaq2m", 
        "template_a228wfs", 
        form.current, 
        "f78LtxFhuZABTxMXn"
      );
      alert("Your message has been sent successfully!");
      form.current.reset();
    } catch (error) {
      alert("An error occurred while sending your message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="z-50 bg-gray-800 relative py-10 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side: Contact Info & Animation */}
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">Get in touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaborations. Feel free to reach out anytime!
            </p>

            {/* Animation with Fallback */}
            <Suspense fallback={<div className="text-white">Loading Animation...</div>}>
              <Lottie animationData={ContactAnimation} className="w-[350px] mx-auto lg:w-[500px]" />
            </Suspense>
          </div>

          {/* Right Side: Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 bg-gray-100 rounded-lg p-10 mx-2">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="from_name" id="name" placeholder="Enter Your Name" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300" required 
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="from_email" id="email" placeholder="Enter Your Email" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300" required 
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" id="message" placeholder="Enter Your Message" 
                className="mt-1 p-2 block w-full rounded-md border-gray-300" required 
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Send
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
