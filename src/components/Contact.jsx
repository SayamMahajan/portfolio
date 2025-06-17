import React, { useRef, lazy, Suspense, useEffect, useState } from "react";

// Lazy load Lottie for better performance
const Lottie = lazy(() => import("lottie-react"));
import ContactAnimation from "../assets/Contact.json";

// Import emailjs from the new package
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Preload Lottie to avoid delay
  useEffect(() => {
    import("lottie-react");
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send the email using the new package
      await emailjs.sendForm(
        "service_3ljaq2m", 
        "template_a228wfs", 
        form.current, 
        "f78LtxFhuZABTxMXn"
      );
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="z-50 bg-gradient-to-br from-gray-800 to-gray-900 relative py-16 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          
          {/* Left Side: Contact Info & Animation */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-6 text-red-400">Let's Connect</h3>
              <p className="mb-8 text-white/85 leading-relaxed">
                I'm always open to new opportunities, collaborations, and interesting conversations. 
                Whether you have a project in mind, need cloud architecture consultation, or just want to chat about technology, feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">sayammahajan8@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Bhopal, India</p>
                  </div>
                </div>
              </div>

              {/* Animation with Fallback */}
              <Suspense fallback={<div className="text-white">Loading Animation...</div>}>
                <Lottie animationData={ContactAnimation} className="w-[300px] mx-auto lg:w-[400px]" />
              </Suspense>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full lg:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h1 className="text-gray-900 text-3xl font-bold mb-8">Send Message</h1>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  ❌ An error occurred while sending your message. Please try again later.
                </div>
              )}
              
              {/* Name Input */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="from_name" 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
                  required 
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="from_email" 
                  id="email" 
                  placeholder="Enter your email address" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" 
                  required 
                />
              </div>

              {/* Message Input */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5"
                  placeholder="Tell me about your project or just say hello!" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none" 
                  required 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;