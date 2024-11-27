"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import me from "../me1.jpg";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-white body-font bg-gray-900 overflow-x-hidden">
      <div className="container mx-auto flex px-5 py-24 flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left text-center">
          <h1 className="text-4xl sm:text-3xl md:text-5xl mb-4 text-pink-600 font-serif font-bold hover:uppercase hover:text-white">
            <span>HELLO,</span>
            <Typewriter
              options={{
                strings: ["I AM ADNAN MASIH"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p
            className="mb-6 leading-relaxed text-sm sm:text-base md:text-lg text-gray-300"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            I am a full-stack developer, and the student of Certified Cloud
            Native Generative, Agentic, and Robotic AI Engineering. I am
            passionate about exploring the intersection of business and
            technology through cloud-applied generative AI engineering. My
            journey is about mastering the latest AI tools to enhance web
            development and drive business innovation.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="https://github.com/Adnan-Git-Hub">
              <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-600 text-white rounded-full p-4 w-14 h-14 transition-transform transform hover:scale-110">
                <FaGithub size={26} />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/adnan-rajput/">
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-400 text-white rounded-full p-4 w-14 h-14 transition-transform transform hover:scale-110">
                <FaLinkedin size={26} />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center mb-12 md:mb-0"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          <div className="relative rounded-full border-8 border-pink-600 shadow-xl w-80 h-80 sm:w-96 sm:h-96 md:w-400 md:h-400 lg:w-[30rem] lg:h-[30rem] flex items-center justify-center overflow-hidden">
            <Image
              src={me}
              alt="Adnan Masih"
              className="absolute rounded-full w-full h-full object-cover transition-transform duration-700 hover:scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

