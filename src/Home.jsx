import React, { useRef } from 'react';
import { FaArrowDown, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    tag: 'First Project',
    title: 'Restaurant App for imaginory brand called MEWA',
    desc: 'My first figma project where I created a restaurant app for an imaginory brand called MEWA. It inludes both dark and light mode. Different pages with different features are included in this project.',
    img: '/project1.png',
    link: '/projects/project-1',
  },
  {
    tag: 'Second Project',
    title: 'Portfolio Design with Figma including prototype',
    desc: 'Creating self portfolio design with Figma including prototype and case study.',
    img: '/project2.jpg',
    link: '/projects/project-2',
  },
  {
    tag: 'Third Project',
    title: 'MEWA Hover Spotlight Website',
    desc: 'Showcasing a hover effect on different cards and adding spotlight effect on hover in text.',
    img: '/project3.jpg',
    link: '/projects/project-3',
  },
  {
    tag: 'Fourth Project',
    title: 'Fragments Showcasing Website',
    desc: 'Tried something with colors and hovering effect on this project. It includes different fragments showcasing different colors and hover effects.',
    img: '/project4.jpg',
    link: '/projects/project-4',
  },
];

function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-[#1E1E1E] text-white font-inter min-h-screen scroll-smooth">
        {/* Hero */}
        <section className="container mx-auto max-w-6xl py-20 px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <img src="/your-image.JPG" alt="Pranaya Chakradhar" className="w-full md:w-1/2 aspect-square object-cover rounded-lg" />
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-5xl font-bold mb-6">Who am I?</h2>
              <p className="text-[#CFCFCF] leading-relaxed mb-8">
                Hi, I’m <span className="font-medium text-white">Pranaya Chakradhar</span>, a UI/UX and Graphic Designer from Nepal. I design with intention, blending empathy and aesthetics to craft intuitive digital experiences. From wireframes to visuals, I love turning ideas into purposeful, beautiful solutions. Let’s build something meaningful together!
              </p>
              <button className="border border-white px-6 py-2 tracking-wide text-sm hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Arrow */}
        <div className="flex justify-center">
          <button
            aria-label="Scroll to projects"
            onClick={scrollToProjects}
            className="text-4xl mb-6 text-white animate-bounce"
          >
            <FaArrowDown />
          </button>
        </div>

        {/* Projects */}
        <section ref={projectsRef} className="bg-[#252525]">
          <div className="container mx-auto max-w-6xl py-20 px-4">
            <h3 className="text-3xl font-bold mb-14 text-center">Featured Projects</h3>
            {projects.map((project, idx) => (
              <div
                key={project.tag}
                className={`grid md:grid-cols-2 gap-12 mb-20 items-center ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <img src={project.img} alt={project.title} className="w-[592px] h-[476px] object-cover object-top rounded-lg" />
                <div>
                  <span className="inline-block bg-[#4B4B4B] text-white text-xs uppercase tracking-wide px-4 py-1 rounded-full mb-4">
                    {project.tag}
                  </span>
                  <h4 className="text-2xl font-semibold mb-4">{project.title}</h4>
                  <p className="text-[#CFCFCF] leading-relaxed mb-6">{project.desc}</p>
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-sm text-white hover:opacity-80 transition group"
                  >
                    View Project
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2A2A2A] py-10">
          <div className="container mx-auto max-w-6xl text-center px-4">
            <div className="flex justify-center gap-6 text-2xl mb-6">
              <a href="https://www.facebook.com/pranaya.chakradhar" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#509CF9] transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/pranaya_chakradhar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E6683C] transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/pranaya-chakradhar-8575aa2a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0A66C2] transition">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-[#AAAAAA] text-sm">Designed by Pranaya Chakradhar</p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

export default Home;
