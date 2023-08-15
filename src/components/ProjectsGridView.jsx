import { useState, useEffect } from 'react';
import { ArrowIcon, GitHubIcon, YoutubeIcon } from './Icons';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ProjectsGridView() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get(`${API_BASE_URL}api/portfolio-projects`); // Update the endpoint URL accordingly
        const orderedProjects = response.data.sort((a, b) => {
          return a.sequenceID - b.sequenceID;
        });
        setProjects(orderedProjects);
        // setProjects(response.data);
      } catch (error) {
        console.error('An error occurred while fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project._id} className="p-4 bg-white rounded shadow-md">
              <img src={project.imageURL} alt={project.title} className="w-full mb-4 rounded" />
              <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
              <p className="mb-2 text-gray-600">{project.description}</p>
              <div className="flex justify-between">
                {project.sourceCodeURL && (
                  <a href={project.sourceCodeURL} className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12" target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </a>
                )}
                {project.demoURL && (
                  <a href={project.demoURL} className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12" target="_blank" rel="noreferrer">
                    <ArrowIcon />
                  </a>
                )}
                {project.youtubeURL && (
                  <a href={project.youtubeURL} className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12" target="_blank" rel="noreferrer">
                    <YoutubeIcon />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap mt-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 mb-2 mr-2 text-sm text-gray-600 bg-gray-200 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-2">
                <span className={`px-2 py-1 text-sm rounded ${project.visibility ? 'bg-green-300' : 'bg-red-300'}`}>
                  {project.visibility ? 'Visible' : 'Hidden'}
                </span>
              </div>
              <div className="mt-2">
                <span className="px-2 py-1 text-sm text-gray-600 bg-gray-200 rounded-full">
                  {project.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}