// src/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const projectEmbeds = {
  'project-1': {
    title: 'Case Study: First Project',
    embedUrl:
      'https://embed.figma.com/proto/Cg3jf0N9QV6OBixEJoGbN7/first?node-id=97-2&scaling=min-zoom&content-scaling=fixed&page-id=54%3A5&starting-point-node-id=363%3A94&embed-host=share',
  },
  'project-2': {
    title: 'Case Study: Second Project',
    embedUrl:
      'https://embed.figma.com/proto/SECOND_PROJECT_LINK_HERE',
  },
  'project-3': {
    title: 'Case Study: Third Project',
    embedUrl:
      'https://embed.figma.com/proto/THIRD_PROJECT_LINK_HERE',
  },
  'project-4': {
    title: 'Case Study: Fourth Project',
     embedUrl: 'https://embed.figma.com/proto/CYvGoIFYr42cA0pCWhRyja/second?node-id=2-16&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share',
  },
};

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectEmbeds[projectId];

  if (!project) {
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <div className="bg-[#1E1E1E] text-white font-inter min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{project.title}</h2>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="100%"
          height="600"
          src={project.embedUrl}
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default ProjectDetail;
