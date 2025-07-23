import Projects from './Projects';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact'; // ⬅️ Import the Contact page
import { motion } from 'framer-motion';
import ProjectDetail from './ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<ProjectDetail />} />

        <Route path="contact" element={<Contact />} /> {/* ⬅️ Add this line */}
        <Route path="*" element={<div className="p-10 text-white">404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
