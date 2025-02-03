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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* About Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center text-white">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello! I'm <strong>Sayam Mahajan</strong>, a passionate FullStack Developer with a knack for building
            scalable and efficient web applications. With expertise in technologies like <strong>Node.js</strong>,{" "}
            <strong>React</strong>, <strong>MongoDB</strong>, and I create user-focused solutions that solve real-world
            problems.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Outside of coding, I love tackling challenges on LeetCode and staying up-to-date with the latest tech trends.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Currently, I'm completing my <strong>BTech in Computer Science and Engineering (CSE)</strong> at <strong>VIT Bhopal</strong>, with graduation expected in <strong>2026</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
