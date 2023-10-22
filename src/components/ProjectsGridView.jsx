import { useState, useEffect } from 'react';
import { GitHubIcon, YoutubeIcon } from './Icons';
import axios from 'axios';
import { LuGlobe } from "react-icons/lu";
import YouTubePlayer from './YouTubePlayer';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ProjectsGridView() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get(`${API_BASE_URL}api/portfolio-projects`);
        const orderedProjects = response.data.sort((a, b) => {
          return a.sequenceID - b.sequenceID;
        });
        setProjects(orderedProjects);
      } catch (error) {
        console.error('An error occurred while fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

  const openVideoModal = (videoId) => {
    setCurrentVideoId(videoId);
    setModalOpen(true);
  };

  const closeVideoModal = () => {
    setCurrentVideoId('');
    setModalOpen(false);
  };
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter((project) => project.visibility === true)
            .map((project) => (
              <div key={project._id} className="flex flex-col h-full bg-white border border-gray-200 shadow-sm group rounded-xl">
                <div className="flex flex-col items-center justify-center h-52 rounded-t-xl">
                  <img className='rounded-t-xl' src={project.imageURL} alt="" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mt-2'>
                    {project.techStack.map((tech) => (
                      <span key={tech} className="inline-flex justify-center items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='mt-2'>
                    <span className="block mb-1 text-xs font-semibold text-blue-600 uppercase">
                      {project.projectType}
                    </span>
                  </div>
                  {/* <div className='mt-2'>
                    <span className="block mb-1 text-xs font-semibold text-blue-600 uppercase">
                      {project.visibility ? 'Visible' : 'Hidden'}
                    </span>
                  </div> */}
                </div>
                <div className="flex mt-auto border-t border-gray-200 divide-x divide-gray-200">
                  {project.sourceCodeURL && (
                    <a
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white shadow-sm rounded-bl-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4"
                      href={project.sourceCodeURL}
                    >
                      <GitHubIcon />
                      Code
                    </a>
                  )}
                  {project.demoURL && (
                    <a
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white shadow-sm rounded-br-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4"
                      href={project.demoURL}
                    >
                      <LuGlobe />
                      Deployment
                    </a>
                  )}
                  {project.youtubeURL && (
                    <a
                      onClick={() => openVideoModal(project.youtubeURL)}
                      className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white shadow-sm rounded-br-xl hover-bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4"
                    >
                      <YoutubeIcon />
                      Youtube
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
        <YouTubePlayer isOpen={modalOpen} videoId={currentVideoId} closeModal={closeVideoModal} />
      </div>
    </>
  );
}
