import React from "react";
import { Parallax } from "react-scroll-parallax";

const About = () => {
  return (
    <section id="about" className="relative h-screen mt-20">
      <div className="absolute inset-0">
        <Parallax speed={-10}>
          <img
            src="/images/parallax.png"
            alt="Background"
            className="w-full h-[80vh] sm:h-[80vh] md:h-[70vh] object-cover mt-20"
          />
        </Parallax>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* About Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center text-white">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">About Me</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hello! I'm <strong className="text-red-400">Sayam Mahajan</strong>, a passionate FullStack Developer and AWS Certified Solutions Architect with a knack for building scalable, cloud-native applications. With expertise in technologies like <strong className="text-blue-400">Node.js</strong>, <strong className="text-cyan-400">React</strong>, <strong className="text-green-400">MongoDB</strong>, and <strong className="text-orange-400">AWS Cloud Services</strong>, I create user-focused solutions that solve real-world problems.
            </p>
            <p>
              As an <strong className="text-orange-400">AWS Certified Solutions Architect Associate</strong> and <strong className="text-blue-400">Cloud Practitioner</strong>, I specialize in designing and implementing robust cloud architectures using services like EC2, S3, RDS, Lambda, and more. I'm passionate about leveraging cloud technologies to build scalable, secure, and cost-effective solutions.
            </p>
            <p>
              Outside of coding and cloud architecture, I love tackling challenges on LeetCode, contributing to open-source projects, and staying up-to-date with the latest tech trends in both web development and cloud computing.
            </p>
            <p>
              Currently, I'm completing my <strong className="text-purple-400">BTech in Computer Science and Engineering (CSE)</strong> at <strong className="text-yellow-400">VIT Bhopal</strong>, with graduation expected in <strong>2026</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;