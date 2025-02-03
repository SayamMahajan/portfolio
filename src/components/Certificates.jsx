import React, { useState, useEffect } from "react";
import Lottie from 'lottie-react'
import Certificate from '../assets/Certificate.json'

const Certificates = () => {
  const certificates = [
    {
      title: "Google- The Bites and Bytes of Networking",
      image: "/images/bits.png",
    },
    {
      title: "NPTEL- Cloud Computing",
      image: "/images/nptel.png",
    },
    {
      title: "Udemy- Mastering Data Structures & Algorithms using C and C++",
      image: "/images/dsa.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
      }, 3000);
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
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleShowCertificate = () => {
    setShowCertificateModal(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificateModal(false);
  };

  return (
    <div className="relative" id="certificates">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl mt-3 text-red-600 font-bold uppercase">
              Certificates
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="overflow-hidden h-[400px]">
                <div
                  className={`transition-transform duration-300 ${isPaused ? "paused" : ""}`}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    display: 'flex',
                  }}
                  onClick={pauseScrolling}
                >
                  {certificates.map((certificate, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full flex flex-col items-center"
                      style={{ width: "100%" }}
                      onClick={handleShowCertificate}
                    >
                      <h4 className="text-2xl font-semibold text-gray-600">
                        {certificate.title}
                      </h4>
                      <div className="mt-4">
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-auto h-full rounded-md max-h-[400px] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-gray-200"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-gray-200"
                >
                  →
                </button>
              </div>
            </div>
            <Lottie animationData={Certificate} className='w-[350px] mx-auto lg:w-[500px]'/>
          </div>
        </div>
      </div>
      {showCertificateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg p-6 max-w-lg w-full shadow-xl">
            <button
              onClick={handleCloseCertificate}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-lg font-bold"
            >
              ✕
            </button>
            <div className="text-center">
              <img
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title}
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
