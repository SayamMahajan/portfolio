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
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl mt-3 text-red-600 font-bold uppercase">
              Experience
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">
                  Work Experience
                </h3>
                <div
                  className={`transition-transform duration-300 ${
                    isAnimating
                      ? "transform scale-95 opacity-70"
                      : "transform scale-100 opacity-100"
                  }`}
                >
                  <h4 className="text-3xl font-semibold text-gray-600">
                    {experiences[currentIndex].title}
                  </h4>
                  <p className="mt-4 text-xl text-gray-600">
                    {experiences[currentIndex].description}
                  </p>
                  {currentIndex === 0 && (
                    <div className="mt-6">
                      <button
                        onClick={handleShowCertificate}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                      >
                        Show Certificate
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={handlePrev}
                    className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors ${
                      currentIndex === 0 && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={currentIndex === 0}
                  >
                    ←
                  </button>
                  <div className="flex space-x-2">
                    {experiences.map((_, index) => (
                      <span
                        key={index}
                        className={`h-3 w-3 rounded-full transition-colors ${
                          index === currentIndex
                            ? "bg-gray-900"
                            : "bg-gray-400"
                        }`}
                      ></span>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors ${
                      currentIndex === experiences.length - 1 &&
                      "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={currentIndex === experiences.length - 1}
                  >
                    →
                  </button>
                </div>
              </div>
              <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                <h3 className='text-3xl font-semibold text-red-600'>Skills</h3>
                <div className='flex items-center justify-center flex-wrap gap-3 m-2'>
                  {/* Frontend Skills */}
                  <div className="border border-orange-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-500 hover:bg-orange-100 transition-colors">
                    <img src="/images/Html.png" alt="html" className="w-11" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-blue-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-blue-100 transition-colors">
                    <img src="/images/CSS.png" alt="css" className="w-9" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-yellow-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-yellow-500 hover:bg-yellow-100 transition-colors">
                    <img src="/images/JS.png" alt="js" className="w-10" />
                    <span className="font-semibold">JavaScript</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-400 hover:bg-blue-100 transition-colors">
                    <img src="/images/React.png" alt="react" className="w-9 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-purple-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-purple-500 hover:bg-purple-100 transition-colors">
                    <img src="/images/Redux.png" alt="redux" className="w-9" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="border border-teal-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-teal-500 hover:bg-teal-100 transition-colors">
                    <img src="/images/Tailwind.png" alt="tailwind" className="w-10 rounded-full" />
                    <span className="font-semibold">Tailwind</span>
                  </div>
                  <div className="border border-indigo-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-indigo-500 hover:bg-indigo-100 transition-colors">
                    <img src="/images/Bootstrap.png" alt="bootstrap" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  
                  {/* Backend Skills */}
                  <div className="border border-green-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-500 hover:bg-green-100 transition-colors">
                    <img src="/images/NodeLogo.png" alt="node" className="w-10" />
                    <span className="font-semibold">NodeJs</span>
                  </div>
                  <div className="border border-gray-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-gray-500 hover:bg-gray-200 transition-colors">
                    <img src="/images/Express.png" alt="express" className="w-10" />
                    <span className="font-semibold">ExpressJs</span>
                  </div>
                  
                  {/* Database Skills */}
                  <div className="border border-green-600 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-green-600 hover:bg-green-50 transition-colors">
                    <img src="/images/mongodb.svg" alt="mongo" className="w-10" />
                    <span className="font-semibold">MongoDb</span>
                  </div>
                  <div className="border border-blue-600 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-600 hover:bg-blue-50 transition-colors">
                    <img src="/images/postgre.png" alt="postgre" className="w-10" />
                    <span className="font-semibold">PostgreSQL</span>
                  </div>
                  <div className="border border-blue-700 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-700 hover:bg-blue-50 transition-colors">
                    <img src="/images/mysql.png" alt="mysql" className="w-10" />
                    <span className="font-semibold">MySQL</span>
                  </div>
                  
                  {/* AWS Skills - Highlighted */}
                  <div className="border-2 border-orange-500 bg-orange-50 flex items-center gap-1 w-max px-3 py-2 rounded-lg shadow-lg shadow-orange-500 hover:bg-orange-100 transition-colors">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AWS</span>
                    </div>
                    <span className="font-bold text-orange-700">EC2</span>
                  </div>
                  <div className="border-2 border-green-500 bg-green-50 flex items-center gap-1 w-max px-3 py-2 rounded-lg shadow-lg shadow-green-500 hover:bg-green-100 transition-colors">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AWS</span>
                    </div>
                    <span className="font-bold text-green-700">S3</span>
                  </div>
                  <div className="border-2 border-blue-500 bg-blue-50 flex items-center gap-1 w-max px-3 py-2 rounded-lg shadow-lg shadow-blue-500 hover:bg-blue-100 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AWS</span>
                    </div>
                    <span className="font-bold text-blue-700">RDS</span>
                  </div>
                  <div className="border-2 border-purple-500 bg-purple-50 flex items-center gap-1 w-max px-3 py-2 rounded-lg shadow-lg shadow-purple-500 hover:bg-purple-100 transition-colors">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AWS</span>
                    </div>
                    <span className="font-bold text-purple-700">Lambda</span>
                  </div>
                  
                  {/* Other Skills */}
                  <div className="border border-orange-600 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-orange-600 hover:bg-orange-50 transition-colors">
                    <img src="/images/git.png" alt="git" className="w-10" />
                    <span className="font-semibold">Git</span>
                  </div>
                  <div className="border border-blue-800 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-800 hover:bg-blue-50 transition-colors">
                    <img src="/images/cpp.png" alt="cpp" className="w-10" />
                    <span className="font-semibold">C++</span>
                  </div>
                  <div className="border border-red-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-500 hover:bg-red-50 transition-colors">
                    <img src="/images/java.png" alt="java" className="w-10" />
                    <span className="font-semibold">Java</span>
                  </div>
                  <div className="border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-blue-100 transition-colors">
                    <img src="/images/Golang.png" alt="golang" className="w-11" />
                    <span className="font-semibold">GoLang</span>
                  </div>
                  <div className='border border-blue-400 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-blue-500 hover:bg-blue-100 transition-colors'>
                    <img src="/images/docker.png" alt="docker" className='w-11'/>
                    <span className='font-semibold'>Docker</span>
                  </div>
                </div>
              </div>
            </div>
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
                src={experiences[currentIndex].certificate}
                alt="Certificate"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;