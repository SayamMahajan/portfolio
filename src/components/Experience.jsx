import React, { useState } from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Edunet Foundation",
      description:
        "During my internship at Edunet Foundation (Dec 2024 - Jan 2025) as a Full-Stack MERN Developer, I worked on a digital wallet website, focusing on PayPal API integration, email verification, frontend development, JWT tokens, and cloud deployment using AWS services.",
      certificate: "/images/CSS.png",
    },
    {
      title: "SIH 2024",
      description:
        "In SIH 2024, our team worked on problem statement 1620, focusing on managing queues in hospital OPDs, streamlining patient admissions, and solving related challenges. We successfully cleared the college round and ranked among the top 40 teams nationally.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);

  const handleNext = () => {
    if (currentIndex < experiences.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleShowCertificate = () => {
    setShowCertificateModal(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificateModal(false);
  };

  return (
    <div className="relative" id="experience">
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-4xl font-bold text-gray-800 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Work Experience
                </h3>
                <div
                  className={`transition-transform duration-300 ${
                    isAnimating
                      ? "transform scale-95 opacity-70"
                      : "transform scale-100 opacity-100"
                  }`}
                >
                  <h4 className="text-3xl font-bold text-gray-700 mb-4">
                    {experiences[currentIndex].title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {experiences[currentIndex].description}
                  </p>
                  {currentIndex === 0 && (
                    <div className="mt-8">
                      <button
                        onClick={handleShowCertificate}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                      >
                        Show Certificate
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={handlePrev}
                    className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg ${
                      currentIndex === 0 && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={currentIndex === 0}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex space-x-3">
                    {experiences.map((_, index) => (
                      <span
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                            : "bg-gray-300"
                        }`}
                      ></span>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className={`p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg ${
                      currentIndex === experiences.length - 1 &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={currentIndex === experiences.length - 1}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className='bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50'>
                <h3 className='text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center'>
                  Skills
                </h3>
                <div className='flex items-center justify-center flex-wrap gap-4'>
                  {/* Frontend Skills */}
                  <div className="border-2 border-orange-400 bg-orange-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/Html.png" alt="html" className="w-8 h-8" />
                    <span className="font-bold text-orange-700">HTML</span>
                  </div>
                  <div className="border-2 border-blue-400 bg-blue-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/CSS.png" alt="css" className="w-8 h-8" />
                    <span className="font-bold text-blue-700">CSS</span>
                  </div>
                  <div className="border-2 border-yellow-400 bg-yellow-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/JS.png" alt="js" className="w-8 h-8" />
                    <span className="font-bold text-yellow-700">JavaScript</span>
                  </div>
                  <div className="border-2 border-cyan-400 bg-cyan-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/React.png" alt="react" className="w-8 h-8 rounded-full" />
                    <span className="font-bold text-cyan-700">React</span>
                  </div>
                  <div className="border-2 border-purple-400 bg-purple-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/Redux.png" alt="redux" className="w-8 h-8" />
                    <span className="font-bold text-purple-700">Redux</span>
                  </div>
                  <div className="border-2 border-teal-400 bg-teal-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/Tailwind.png" alt="tailwind" className="w-8 h-8 rounded-full" />
                    <span className="font-bold text-teal-700">Tailwind</span>
                  </div>
                  <div className="border-2 border-indigo-400 bg-indigo-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/Bootstrap.png" alt="bootstrap" className="w-8 h-8" />
                    <span className="font-bold text-indigo-700">Bootstrap</span>
                  </div>
                  
                  {/* Backend Skills */}
                  <div className="border-2 border-green-400 bg-green-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/NodeLogo.png" alt="node" className="w-8 h-8" />
                    <span className="font-bold text-green-700">NodeJs</span>
                  </div>
                  <div className="border-2 border-gray-400 bg-gray-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/Express.png" alt="express" className="w-8 h-8" />
                    <span className="font-bold text-gray-700">ExpressJs</span>
                  </div>
                  
                  {/* Database Skills */}
                  <div className="border-2 border-green-500 bg-green-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/mongodb.svg" alt="mongo" className="w-8 h-8" />
                    <span className="font-bold text-green-700">MongoDb</span>
                  </div>
                  <div className="border-2 border-blue-500 bg-blue-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/postgre.png" alt="postgre" className="w-8 h-8" />
                    <span className="font-bold text-blue-700">PostgreSQL</span>
                  </div>
                  <div className="border-2 border-blue-600 bg-blue-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/mysql.png" alt="mysql" className="w-8 h-8" />
                    <span className="font-bold text-blue-700">MySQL</span>
                  </div>
                  
                  {/* AWS Skills - Consolidated */}
                  <div className="border-2 border-orange-500 bg-gradient-to-r from-orange-50 to-yellow-50 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">AWS</span>
                    </div>
                    <span className="font-bold text-orange-700 text-lg">AWS</span>
                  </div>
                  
                  {/* Other Skills */}
                  <div className="border-2 border-orange-400 bg-orange-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/git.png" alt="git" className="w-8 h-8" />
                    <span className="font-bold text-orange-700">Git</span>
                  </div>
                  <div className="border-2 border-blue-600 bg-blue-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/cpp.png" alt="cpp" className="w-8 h-8" />
                    <span className="font-bold text-blue-700">C++</span>
                  </div>
                  <div className="border-2 border-red-400 bg-red-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/java.png" alt="java" className="w-8 h-8" />
                    <span className="font-bold text-red-700">Java</span>
                  </div>
                  <div className="border-2 border-cyan-400 bg-cyan-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <img src="/images/Golang.png" alt="golang" className="w-8 h-8" />
                    <span className="font-bold text-cyan-700">GoLang</span>
                  </div>
                  <div className='border-2 border-blue-400 bg-blue-50 flex items-center gap-2 px-3 py-2 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'>
                    <img src="/images/docker.png" alt="docker" className='w-8 h-8'/>
                    <span className='font-bold text-blue-700'>Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCertificateModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="relative bg-white rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
            <button
              onClick={handleCloseCertificate}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300"
            >
              ✕
            </button>
            <div className="text-center">
              <img
                src={experiences[currentIndex].certificate}
                alt="Certificate"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;