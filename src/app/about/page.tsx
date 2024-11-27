"use client";

import Image from "next/image";
import me from "../../../About.jpg";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="text-white body-font bg-black overflow-x-hidden">
        <div className="container mx-auto flex px-4 sm:px-6 py-16 sm:py-20 md:py-24 items-center justify-center flex-col">

        {/* Profile Image */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]">
          <Image
            src={me}
            alt="Adnan's Picture"
            className="rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            fill
            style={{ objectFit: "cover" }}
          />
          {/* Circular Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 rounded-full animate-pulse"></div>
        </div>


          {/* Text Content */}
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white hover:text-pink-600 hover:uppercase transition-colors">
              <span className="text-pink-600 text-5xl sm:text-6xl hover:text-white">A</span>bout Me
            </h1>
            <h2
              className="title-font sm:text-2xl text-xl mb-4 text-pink-400 font-serif font-semibold relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <Typewriter
                options={{
                  strings: ["Crafting My Tech and Business Journey!"],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Underline Animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-violet-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </h2>
            <p
              className="mb-8 leading-relaxed text-sm sm:text-base md:text-lg text-gray-300 px-4 sm:px-6"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              I am an experienced fullstack developer, currently expanding my expertise by learning Next.js for both backend and frontend development. 
              My journey in tech was significantly shaped by completing HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, TAILWIND, NODE.JS and NEXT.JS courses at the Governor Sindh IT Initiative (GIAIC). 
              It was here that I also embarked on learning Certified Cloud Native Generative,
              Agentic, and Robotic AI Engineering with cutting-edge technologies. 
              I am passionate about learning to build Custom GPTs, AI Agents, Humanoids, and Fine-Tune LLMs ...
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <Link href="https://www.facebook.com/adnan3301">
                <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-400 text-white rounded-full p-4 w-14 h-14 transition-transform transform hover:scale-110 hover:shadow-lg">
                  <FaFacebookF size={26} />
                </button>
              </Link>
              <Link href="https://www.instagram.com/">
                <button className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-300 text-white rounded-full p-4 w-14 h-14 transition-transform transform hover:scale-110 hover:shadow-lg">
                  <FaInstagram size={26} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
