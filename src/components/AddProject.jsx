import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;
export default function AddProject() {
  const [formData, setFormData] = useState({
    sequenceID: '',
    imageURL: '',
    title: '',
    description: '',
    techStack: [],
    sourceCodeURL: '',
    demoURL: '',
    youtubeURL: '',
    projectCategory: 'Not Selected',
    projectSubCategory: 'Not Selected',
    visibility: 'false',
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'techStack') {
      const techStackArray = value.split(',').map(item => item.trim()); // Convert comma-separated string to array
      setFormData((prevData) => ({
        ...prevData,
        techStack: techStackArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userAuthKey = window.prompt("Enter your AUTH KEY:");
    const expectedAuthKey = import.meta.env.VITE_AUTH_KEY;

    if (userAuthKey === expectedAuthKey) {
      const isAddingItem = window.confirm('Authentication successful!\nDo you want to add an item?');

      if (isAddingItem) {
        try {
          const response = await axios.post(`${API_BASE_URL}api/portfolio-projects`, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 201) {
            console.log('Project created:', response.data);
            window.alert('Thank you for your submission!');
          } else {
            console.error('Unexpected response:', response);
            window.alert('Submission failed. Please try again later.');
          }
        } catch (error) {
          console.error('Error creating project:', error);
          window.alert('An error occurred while creating the project. Please try again later.');
        }
      } else {
        console.log('Item addition was not confirmed.');
      }
    } else {
      window.alert('Invalid AUTH KEY. Project creation not allowed.');
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <ol
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
          <li
            className="text-sm font-semibold text-gray-800 truncate "
            aria-current="page"
          >
            Add New
          </li>
        </ol>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-14">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl ">
              Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600">New Project</span>
            </h1>
          </div>
          {submissionSuccess ? (
            <p className="mt-3 text-lg text-gray-800">Project created successfully!</p>
          ) : null}
          <form onSubmit={handleSubmit}>
            {/* Card */}
            <div className="bg-white shadow rounded-xl ">
              <div className="relative h-40 rounded-t-xl bg-[url('https://images.pexels.com/photos/18937801/pexels-photo-18937801/free-photo-of-wanna-play-football-or-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover bg-center">
                <div className="absolute top-0 right-0 p-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 "
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
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                    </svg>
                    Upload header
                  </button>
                </div>
              </div>
              <div className="p-4 pt-0 sm:pt-0 sm:p-7">
                {/* Grid */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="sr-only">Product photo</label>
                    <div className="grid sm:flex sm:items-center sm:gap-x-5">
                      <img
                        className="relative z-10 inline-block w-24 h-24 mx-auto -mt-8 rounded-full sm:mx-0 ring-4 ring-white"
                        src="https://images.pexels.com/photos/18937801/pexels-photo-18937801/free-photo-of-wanna-play-football-or-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Image Description"
                      />
                      <div className="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
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
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                          </svg>
                          Upload logo
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-red-600 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-project-name"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Sequence ID
                    </label>
                    <input
                      id="sequenceID"
                      type="number"
                      name='sequenceID'
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter sequence id"
                      value={formData.sequenceID}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-project-name"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Project title
                    </label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter project title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-tech-stack"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Tech Stack comma separated
                    </label>
                    <input
                      id="techStack"
                      name="techStack"
                      type="text"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter project title"
                      value={formData.techStack.join(', ')} // Convert array to comma-separated string
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-image-url"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Image URL
                    </label>
                    <input
                      id="imageURL"
                      name="imageURL"
                      type="text"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="https://example.com"
                      value={formData.imageURL}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-image-url"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Source Code URL
                    </label>
                    <input
                      id="sourceCodeURL"
                      name="sourceCodeURL"
                      type="text"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="https://example.com"
                      value={formData.sourceCodeURL}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-image-url"
                      className="inline-block text-sm font-medium  text-gray-800 mt-2.5 "
                    >
                      Live Link URL
                    </label>
                    <input
                      id="demoURL"
                      name="demoURL"
                      type="text"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="https://example.com"
                      value={formData.demoURL}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-image-url"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Youtube URL
                    </label>
                    <input
                      id="youtubeURL"
                      name="youtubeURL"
                      type="text"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-11 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="https://example.com"
                      value={formData.youtubeURL}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-upload-images"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Preview image
                    </label>
                    <label
                      htmlFor="af-submit-app-upload-images"
                      className="block p-4 text-center border-2 border-gray-200 border-dashed rounded-lg cursor-pointer group sm:p-7 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 "
                    >
                      <input
                        id="af-submit-app-upload-images"
                        name="af-submit-app-upload-images"
                        type="file"
                        className="sr-only"
                      />
                      <svg
                        className="w-10 h-10 mx-auto text-gray-400 "
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                      </svg>
                      <span className="block mt-2 text-sm text-gray-800">
                        Browse your device or{" "}
                        <span className="text-blue-600 group-hover:text-blue-700">
                          drag &apos;n drop&apos;
                        </span>
                      </span>
                      <span className="block mt-1 text-xs text-gray-500">
                        Maximum file size is 2 MB
                      </span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-category"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Project Category
                    </label>
                    <select
                      id="projectCategory"
                      name="projectCategory"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-9 focus:border-blue-500 focus:ring-blue-500 "
                      value={formData.projectCategory}
                      onChange={handleChange}
                    >
                      <option selected="">Select a category</option>
                      <option>Conceptual</option>
                      <option>Capstone</option>
                      <option>Study</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-category"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Project Sub-Category
                    </label>
                    <select
                      id="projectSubCategory"
                      name="projectSubCategory"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-9 focus:border-blue-500 focus:ring-blue-500 "
                      value={formData.projectSubCategory}
                      onChange={handleChange}
                    >
                      <option selected="">Select a sub-category</option>
                      <option>Full Stack</option>
                      <option>Front End</option>
                      <option>Back End</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-category"
                      className="inline-block text-sm font-medium text-gray-800 mt-2.5 "
                    >
                      Visibility
                    </label>
                    <select
                      id="visibility"
                      name="visibility"
                      className="block w-full px-3 py-2 text-sm border-gray-200 rounded-lg shadow-sm pr-9 focus:border-blue-500 focus:ring-blue-500 "
                      value={formData.visibility}
                      onChange={handleChange}
                    >
                      <option selected="">Visibility Status</option>
                      <option>true</option>
                      <option>false</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="af-submit-app-description"
                      className="inline-block text-sm font-medium  text-gray-800 mt-2.5 "
                    >
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="block w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 "
                      rows={6}
                      placeholder="Enter a detailed summary of your project."
                      defaultValue={""}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div className="flex justify-center mt-5 gap-x-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
                  >
                    Submit your project
                  </button>
                </div>
              </div>
            </div>
            {/* End Card */}
          </form>
        </div>
        {/* End Card Section */}
      </div >
    </>
  )
}