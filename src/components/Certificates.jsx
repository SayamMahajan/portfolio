import React, { useState, useEffect, lazy, Suspense } from "react";
import CertificateAnimation from "../assets/Certificate.json";

const Lottie = lazy(() => import("lottie-react"));

const Certificates = () => {
  const certificates = [
    {
      title: "Google - The Bites and Bytes of Networking",
      image: "/images/bits.png",
    },
    {
      title: "NPTEL - Cloud Computing",
      image: "/images/nptel.png",
    },
    {
      title: "Udemy - Mastering Data Structures & Algorithms using C and C++",
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
                    display: "flex",
                  }}
                  onClick={pauseScrolling}
                >
                  {certificates.map((certificate, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full flex flex-col items-center"
                      style={{ width: "100%" }}
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
            <Suspense fallback={<div>Loading Animation...</div>}>
              <Lottie animationData={CertificateAnimation} className="w-[350px] mx-auto lg:w-[500px]" />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
