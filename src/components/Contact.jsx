import React, { useRef, lazy, Suspense, useEffect, useState } from "react";

// Lazy load Lottie for better performance
const Lottie = lazy(() => import("lottie-react"));
import ContactAnimation from "../assets/Contact.json";

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
      const emailjs = await import("emailjs-com");
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
    <section id="contact" className="z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative py-20 px-5 md:px-0">
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>
        
        {/* Horizontal Layout for Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info & Animation */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <p className="mb-8 text-white/90 leading-relaxed text-lg">
                I'm always open to new opportunities, collaborations, and interesting conversations. 
                Whether you have a project in mind, need cloud architecture consultation, or just want to chat about technology, feel free to reach out!
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Email</p>
                    <p className="text-purple-300 text-lg">sayammahajan8@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Location</p>
                    <p className="text-blue-300 text-lg">Bhopal, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animation */}
            <div className="flex justify-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl">
                <Suspense fallback={<div className="text-white text-center py-20">Loading Animation...</div>}>
                  <Lottie animationData={ContactAnimation} className="w-[350px] lg:w-[400px] max-w-full" />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full">
            <form ref={form} onSubmit={sendEmail} className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20">
              <h1 className="text-white text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Send Message
              </h1>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 text-green-300 rounded-2xl backdrop-blur-sm">
                  ✅ Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/50 text-red-300 rounded-2xl backdrop-blur-sm">
                  ❌ An error occurred while sending your message. Please try again later.
                </div>
              )}
              
              {/* Name Input */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-3">Full Name</label>
                <input 
                  type="text" 
                  name="from_name" 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-white/60 backdrop-blur-sm" 
                  required 
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-3">Email Address</label>
                <input 
                  type="email" 
                  name="from_email" 
                  id="email" 
                  placeholder="Enter your email address" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-white/60 backdrop-blur-sm" 
                  required 
                />
              </div>

              {/* Message Input */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-3">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5"
                  placeholder="Tell me about your project or just say hello!" 
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-white placeholder-white/60 backdrop-blur-sm" 
                  required 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
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