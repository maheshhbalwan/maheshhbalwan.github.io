import { useState, useEffect } from 'react';
import { GitHubIcon, VideoIcon } from './Icons';
import axios from 'axios';
import { LuGlobe } from "react-icons/lu";
import YouTubePlayer from './YouTubePlayer';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const SkeletonLoader = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((index) => (
      <div key={index} className="flex flex-col bg-white border shadow-sm rounded-xl">
        <div className="flex flex-col items-center justify-center w-full h-fit rounded-t-xl">
          <span className="block w-full h-48 bg-gray-200 rounded-t-xl"></span>
        </div>
        <div className="p-6">
          <h3 className="h-6 bg-gray-200 rounded-full" style={{ width: '80%' }}></h3>
          <p className="h-4 mt-2 bg-gray-200 rounded-full" style={{ width: '100%' }}></p>
          <ul className="mt-2 space-y-2">
            <li className="w-full h-4 bg-gray-200 rounded-full"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full"></li>
            <li className="w-full h-4 bg-gray-200 rounded-full"></li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex justify-center items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Tag
            </span>
            <span className="inline-flex justify-center items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Tag
            </span>
          </div>
          <div className="mt-2">
            <span className="block mb-1 text-xs font-semibold text-blue-600 uppercase bg-gray-200 rounded-full" style={{ width: '50%' }}></span>
          </div>
        </div>
        <div className="flex mt-auto border-t border-gray-200 divide-x divide-gray-200">
          <span className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white shadow-sm rounded-bl-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4">
            <GitHubIcon />
            Code
          </span>
          <span className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white shadow-sm rounded-br-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4">
            <LuGlobe />
            Deployment
          </span>
          <span className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white shadow-sm rounded-br-xl hover-bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4">
            <VideoIcon />
            Youtube
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default function ProjectsGridView() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get(`${API_BASE_URL}api/portfolio-projects`);
        const orderedProjects = response.data.sort((a, b) => {
          return a.sequenceID - b.sequenceID;
        });
        setProjects(orderedProjects);
        setLoading(false);
      } catch (error) {
        console.error('An error occurred while fetching projects:', error);
        setLoading(false);
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
      {loading ? (
        <SkeletonLoader />
      ) : <> <ol
        className="flex items-center min-w-0 whitespace-nowrap"
        aria-label="Breadcrumb"
      >
        <li className="text-sm">
          <a className="flex items-center text-gray-500 hover:text-blue-600" href="#">
            Home
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 "
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </a>
        </li>
        <li className="text-sm">
          <a className="flex items-center text-gray-500 hover:text-blue-600" href="#/portfolio">
            Portfolio
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 "
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </a>
        </li>
        <li
          className="text-sm font-semibold text-gray-800 truncate "
          aria-current="page"
        >
          Grid View
        </li>
      </ol>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.filter((project) => project.visibility === true)
              .map((project) => (
                <div key={project._id} className="flex flex-col bg-white border shadow-sm rounded-xl">
                  <a
                    rel='noopener noreferrer'
                    href={`#/project/${project._id}`}
                  >
                    <div className="flex flex-col items-center justify-center w-full h-fit rounded-t-xl">
                      <img className='rounded-t-xl' src={project.imageURL} alt="" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800">
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
                          {project.projectCategory}
                        </span>
                      </div>
                      {/* <div className='mt-2'>
                  <span className="block mb-1 text-xs font-semibold text-blue-600 uppercase">
                  {project.visibility ? 'Visible' : 'Hidden'}
                  </span>
                </div> */}
                    </div>
                  </a>
                  <div className="flex mt-auto border-t border-gray-200 divide-x divide-gray-200">
                    {project.sourceCodeURL && (
                      <a
                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white shadow-sm rounded-bl-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4"
                        target="_blank"
                        rel="noreferrer noopener"
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
                        target="_blank"
                        rel="noreferrer noopener"
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
                        <VideoIcon />
                        Youtube
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <YouTubePlayer isOpen={modalOpen} videoId={currentVideoId} closeModal={closeVideoModal} />
        </div>
      </>}
    </>
  )
}