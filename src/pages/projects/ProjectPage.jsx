import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

function ProjectsListPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        // Replace the URL with the appropriate endpoint to fetch a project by its ID.
        const response = await axios.get(`${API_BASE_URL}api/portfolio-projects/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.error('An error occurred while fetching the project:', error);
      }
    }

    fetchProject();
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <div>
        <p>Sequence ID: {project.sequenceID}</p>
        Image: {project.imageURL && `${project.imageURL}`}
        <h1>Title: {project.title}</h1>
        <p>Description: {project.description}</p> 
        <p>Tech Stack: {project.techStack.join(', ')}</p>
        <p>Source Code URL: <a href={project.sourceCodeURL}>GitHub</a></p>
        <p>Demo URL: <a href={project.demoURL}>Demo</a></p>
        <p>YouTube URL: <a href={project.youtubeURL}>YouTube</a></p>
        <p>Visibility: {project.visibility ? 'Visible' : 'Hidden'}</p>
        <p>Category: {project.projectCategory}</p>
        <p>Subcategory: {project.projectSubCategory}</p>
      </div> */}
      <div className="max-w-3xl px-4 pt-6 pb-12 mx-auto lg:pt-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <ol className="flex items-center min-w-0 whitespace-nowrap" aria-label="Breadcrumb">
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
            <li className="text-sm">
              <a className="flex items-center text-gray-500 hover:text-blue-600" href="#/portfolio">
                Project
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
            <li className="text-sm font-semibold text-gray-800 truncate " aria-current="page">
              {project.title}
            </li>
          </ol>
        </div>
        <div className="max-w-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://avatars.githubusercontent.com/u/85355816?v=4"
                  alt="Image Description"
                />
              </div>
              <div className="grow">
                <div className="grid gap-2 sm:flex sm:justify-between sm:items-center">
                  <div>
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="block text-left cursor-pointer hs-tooltip-toggle sm:mb-1">
                        <span className="font-semibold text-gray-800 ">
                          Maheshh Balwan
                        </span>
                      </div>
                    </div>
                    <ul className="text-xs text-gray-500">
                      <li className="relative inline-block pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full ">
                        Software Developer
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-3">
            <figure>
              <img
                className="object-cover w-full rounded-xl"
                src={project.imageURL}
                alt={project.title}
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500">
                {project.title}
              </figcaption>
            </figure>
            <h2 className="text-2xl font-bold md:text-3xl ">
              {project.title}
            </h2>
            <p className="text-lg text-gray-800 ">
              {project.description}
            </p>
            <div>
              {project.techStack.map((tech) => (
                <a
                  key={tech}
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 "
                  href="#"
                >
                  {tech}
                </a>
              ))}
            </div>
          </div>
          <p className="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-1 hover:text-blue-500">
            <a href={project.demoURL} className="flex items-center gap-x-1">
              View Source Code
              <svg
                className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectsListPage;
