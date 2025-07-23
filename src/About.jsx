import React from 'react';
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-[#1E1E1E] text-white font-inter min-h-screen">
      <section className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-14 py-20 px-4 lg:px-0">
        <img
          src="/pranaya-about.jpg"
          alt="Pranaya Chakradhar"
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl text-white font-semibold">HEY THERE!</h2>
          <h3 className="text-xl font-bold text-white leading-snug">
            It&apos;s me, Pranaya and it&apos;s nice to see you here!
          </h3>
          <p className="text-[#CFCFCF] text-sm leading-relaxed">
            Hi! I’m Pranaya Chakradhar, a 7th semester BSc.CSIT student on a design-fueled journey. With a passion for visual storytelling, I’m exploring the world of graphic design and UI/UX, learning the ropes through tools like Figma and Canva, and soaking in every tutorial, project, and pixel along the way.
          </p>
          <p className="text-[#CFCFCF] text-sm leading-relaxed">
            I love turning ideas into visuals—whether I’m designing layouts, snapping moments through my lens, or kicking a football to recharge. I may be shy, occasionally battle anxiety, but I’m also deeply friendly, relentlessly hardworking, and always open to learning something new.
          </p>
          
          <p className="text-[#CFCFCF] text-sm leading-relaxed">
            Right now, I’m on the lookout for an internship that offers hands-on experience, mentorship, and opportunities to push my limits. I’m not an expert-yet, but I’m hardworking, open-minded, and passionate about growing every day.
          </p>
          <p className="text-[#CFCFCF] text-sm leading-relaxed">
            Let’s build something remarkable together.
          </p>
        </div>
      </section>

      {/* Skills & Design Tools Side by Side */}
      <section className="container mx-auto max-w-6xl py-16 px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-10 flex items-center gap-2">
              <span className="text-[#925BFE]">✏️</span> Skills
            </h4>
            <ul className="pl-4 border-l-2 border-[#925BFE] space-y-4 text-sm text-[#CFCFCF]">
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                Graphic Design
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                User Interface Design
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                User Experience Research
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                Microsoft Office Suite
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                Wire-framing & Prototyping
              </li>
            </ul>
          </div>

          {/* Design Tools */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-10 flex items-center gap-2">
              <span className="text-[#925BFE]">💻</span> Design Tools
            </h4>
            <ul className="pl-4 border-l-2 border-[#925BFE] space-y-4 text-sm text-[#CFCFCF]">
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                Figma
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                Canva
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                Lightroom
              </li>
              
              <li className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-4 before:h-4 before:bg-[#925BFE] before:rounded-full">
                PowerPoint
              </li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default About;
