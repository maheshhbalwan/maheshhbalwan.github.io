import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;
function ProjectsListView() {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      console.log('Inside useEffect. Trying to fetch projects');
      try {
        console.log('Trying to fetch projects');
        const response = await axios.get(`${API_BASE_URL}api/portfolio-projects`);
        const orderedProjects = response.data.sort((a, b) => a.sequenceID - b.sequenceID);
        setProjects(orderedProjects);
        setLoading(false);
        console.log('Fetched projects:', orderedProjects.map((project) => project._id));
      } catch (error) {
        if (error.isAxiosError && error.response) {
          console.error('Server error:', error.response.status, error.response.data);
        } else if (error.isAxiosError) {
          console.error('Network error:', error.message);
        } else {
          console.error('An error occurred:', error);
        }
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  function handleExport() {
    if (selectedProjects.length === 0) {
      // No items selected, display an error message
      alert('Please select projects to export');
      return;
    }

    // Log the selected project titles and additional information
    console.log('Selected Projects:');
    selectedProjects.forEach((project) => {
      console.log(`_id: ${project._id}`);
      console.log(`Title: ${project.title}`);
    });

    // Create a string containing all the information
    const selectedProjectInfo = selectedProjects.map((project) => {
      return Object.entries(project)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    }).join('\n\n');

    // Create a Blob containing the text content
    const blob = new Blob([selectedProjectInfo], { type: 'text/plain' });

    // Create a download link
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'maheshhbalwan_portfolio_projects.txt';

    // Trigger a click event to start the download
    a.click();
  }

  async function handleDelete(projectId) {
    const userAuthKey = window.prompt("Enter your AUTH KEY:");
    const expectedAuthKey = import.meta.env.VITE_AUTH_KEY;

    if (userAuthKey === expectedAuthKey) {
      const confirmDelete = window.confirm("Are you sure you want to delete this project?");

      if (confirmDelete) {
        try {
          console.log('Projects before deletion:', projects);

          await axios.delete(`${API_BASE_URL}api/portfolio-projects/${projectId}`);

          setProjects(projects.filter(project => project._id !== projectId));
          console.log('Projects after deletion:', projects);
        } catch (error) {
          console.error('An error occurred while deleting the project:', error);
        }
      }
    } else {
      window.alert('Invalid AUTH KEY. Deletion not allowed.');
    }
  }

  return (
    <>
      <ol className="flex items-center min-w-0 whitespace-nowrap" aria-label="Breadcrumb">
        <li className="text-sm">
          <a className="flex items-center text-gray-500 hover:text-blue-600" href="#">
            Home
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400"
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
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400"
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
        <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
          List View
        </li>
      </ol>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl ">
                <div className="grid gap-3 px-6 py-4 border-b border-gray-200 md:flex md:justify-between md:items-center ">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 ">
                      Projects
                    </h2>
                    <p className="text-sm text-gray-600 ">
                      Add or remove projects [Admin access required]
                    </p>
                  </div>
                  {/* <div className="sm:col-span-1">
                    <label htmlFor="hs-as-table-product-review-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-as-table-product-review-search"
                        name="hs-as-table-product-review-search"
                        className="block w-full px-3 py-2 text-sm border-gray-200 rounded-md shadow-sm pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Search"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                    </div>
                  </div> */}
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        id="hs-as-table-table-export-dropdown"
                        type="button"
                        onClick={handleExport}
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                        </svg>
                        Export
                      </button>
                      <a
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        href="#/add"
                        target='_blank'
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                        Add Project
                      </a>
                    </div>
                  </div>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3 pl-6 text-left">
                        <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                          <input
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded pointer-events-none shrink-0 focus:ring-blue-500"
                            id="hs-at-with-checkboxes-main"
                            onChange={() => {
                              if (selectedProjects.length === projects.length) {
                                setSelectedProjects([]);
                              } else {
                                setSelectedProjects(projects);
                              }
                            }}
                          />
                          <span className="sr-only">Checkbox</span>
                        </label>
                      </th>
                      <th scope="col" className="py-3 pl-6 pr-6 text-left lg:pl-3 xl:pl-0">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            Name
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            Category
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            Youtube
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            Code
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            Live Link
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-right" />
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {loading ? (
                      <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      projects
                        .filter((project) => project.visibility === true)
                        .map((project, index) => (
                          <tr key={index} className="border-t border-gray-200">
                            <td className="w-px h-px whitespace-nowrap">
                              <div className="py-3 pl-6">
                                <label htmlFor={`hs-at-with-checkboxes-${index}`} className="flex">
                                  <input
                                    type="checkbox"
                                    className="text-blue-600 border-gray-200 rounded pointer-events-none"
                                    id={`hs-at-with-checkboxes-${index}`}
                                    onChange={() => {
                                      if (selectedProjects.includes(project)) {
                                        setSelectedProjects(selectedProjects.filter((p) => p !== project));
                                      } else {
                                        setSelectedProjects([...selectedProjects, project]);
                                      }
                                    }}
                                  />
                                  <span className="sr-only">Checkbox</span>
                                </label>
                              </div>
                            </td>
                            <td className="w-px h-px whitespace-nowrap">
                              <a target="_blank" rel="noopener noreferrer" href={`#/project/${project._id}`}>
                                <div className="py-3 pl-6 pr-6 lg:pl-3 xl:pl-0">
                                  <div className="flex items-center space-x-3">
                                    <img className="inline-block w-10 h-10" src={project.imageURL} alt="Project" />
                                    <div className="flex-grow">
                                      <span className="block text-sm font-semibold text-gray-800">
                                        {project.title}
                                      </span>
                                      <span className="block text-sm text-gray-500">
                                        {project.description ? project.description.slice(0, 50) + "..." : ''}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td className="w-px h-px whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="block text-sm font-semibold text-gray-800">
                                  {project.projectCategory}
                                </span>
                                <span className="block text-sm text-gray-500">{project.projectSubCategory}</span>
                              </div>
                            </td>
                            <td className="w-px h-px whitespace-nowrap">
                              {project.youtubeURL && (
                                <div className="px-6 py-3">
                                  <a href={project.youtubeURL} target="_blank" rel="noopener noreferrer">
                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                      Video
                                    </span>
                                  </a>
                                </div>
                              )}
                            </td>

                            <td className="w-px h-px whitespace-nowrap">
                              {project.sourceCodeURL && (
                                <div className="px-6 py-3">
                                  <a href={project.sourceCodeURL} target="_blank" rel="noopener noreferrer">
                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                      Code
                                    </span>
                                  </a>
                                </div>
                              )}
                            </td>
                            <td className="w-px h-px whitespace-nowrap">
                              {project.demoURL && (
                                <div className="px-6 py-3">
                                  <a href={project.demoURL} target="_blank" rel="noopener noreferrer">
                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                      Live Link
                                    </span>
                                  </a>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>

                <div className="grid gap-3 px-6 py-4 border-t border-gray-200 md:flex md:justify-between md:items-center">
                  <div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">
                        {projects.length}
                      </span>{' '}
                      results
                    </p>
                  </div>
                  {/* <div>
    <div className="inline-flex gap-x-2">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
      >
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        Prev
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
      >
        Next
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  </div> */}
                </div>

              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default ProjectsListView