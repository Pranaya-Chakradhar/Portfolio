import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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

function Projects() {
  return (
    <div className="bg-[#1E1E1E] text-white font-inter min-h-screen">
      <section className="container mx-auto max-w-6xl py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <div key={project.tag} className="flex flex-col gap-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[476px] object-cover object-top rounded-lg"
              />
              <span className="inline-block bg-[#4B4B4B] text-white text-xs uppercase tracking-wide px-4 py-1 rounded-full w-fit">
                {project.tag}
              </span>
              <h3 className="text-xl font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="text-[#CFCFCF] text-sm leading-relaxed">
                {project.desc}
              </p>
              <Link
                                  to={project.link}
                                  className="inline-flex items-center gap-2 text-sm text-white hover:opacity-80 transition group"
                                >
                                  View Project
                                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                </Link>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}

export default Projects;
