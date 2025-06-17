import React, { useState, useEffect, lazy, Suspense } from "react";
import CertificateAnimation from "../assets/Certificate.json";

const Lottie = lazy(() => import("lottie-react"));

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Solutions Architect Associate",
      image: "/images/aws-saa.png",
      description: "Comprehensive certification covering AWS architecture best practices, security, and cost optimization.",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      title: "AWS Cloud Practitioner",
      image: "/images/aws-cp.png", 
      description: "Foundational certification demonstrating cloud fluency and foundational AWS knowledge.",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      title: "Google - The Bits and Bytes of Networking",
      image: "/images/bits.png",
      description: "Comprehensive networking fundamentals course covering protocols, troubleshooting, and network services.",
      issuer: "Google",
      date: "2023"
    },
    {
      title: "NPTEL - Cloud Computing",
      image: "/images/nptel.png",
      description: "In-depth course on cloud computing concepts, virtualization, and distributed systems.",
      issuer: "NPTEL",
      date: "2023"
    },
    {
      title: "Udemy - Mastering Data Structures & Algorithms using C and C++",
      image: "/images/dsa.png",
      description: "Comprehensive DSA course covering fundamental algorithms and data structures implementation.",
      issuer: "Udemy",
      date: "2023"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, certificates.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
    pauseScrolling();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    pauseScrolling();
  };

  const pauseScrolling = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  const currentCert = certificates[currentIndex];

  return (
    <div className="relative" id="certificates">
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Certifications
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Professional certifications demonstrating expertise in cloud computing, web development, and software engineering
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Certificate Display */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
              <div className="overflow-hidden h-[500px] relative">
                <div
                  className={`transition-all duration-500 ease-in-out ${isPaused ? "paused" : ""}`}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    display: "flex",
                  }}
                  onClick={pauseScrolling}
                >
                  {certificates.map((certificate, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full flex flex-col items-center space-y-4"
                      style={{ width: "100%" }}
                    >
                      {/* Certificate Badge */}
                      {index < 2 && (
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                          index === 0 ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 border-2 border-orange-300' : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-2 border-blue-300'
                        }`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            index === 0 ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          }`}>
                            <span className="text-white font-bold text-xs">AWS</span>
                          </div>
                          {index === 0 ? 'Solutions Architect Associate' : 'Cloud Practitioner'}
                        </div>
                      )}
                      
                      <h4 className="text-2xl font-bold text-gray-800 text-center leading-tight">
                        {certificate.title}
                      </h4>
                      
                      <div className="mt-6 relative group">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-auto rounded-2xl shadow-xl max-h-[300px] object-contain transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-2xl"></div>
                      </div>
                      
                      {certificate.description && (
                        <p className="text-gray-600 text-center text-sm leading-relaxed mt-4 bg-white/50 rounded-2xl p-4">
                          {certificate.description}
                        </p>
                      )}
                      
                      <div className="flex justify-between items-center w-full mt-4 pt-4 border-t border-gray-200">
                        <span className="text-sm font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                          {certificate.issuer}
                        </span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {certificate.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Dots Indicator */}
                <div className="flex space-x-3">
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        pauseScrolling();
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Animation */}
            <div className="flex justify-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <Suspense fallback={<div className="text-gray-500 text-center py-20">Loading Animation...</div>}>
                  <Lottie 
                    animationData={CertificateAnimation} 
                    className="w-[400px] lg:w-[500px] max-w-full" 
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;