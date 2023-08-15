import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ProjectsAddNew() {
  const [formData, setFormData] = useState({
    sequenceID: '',
    imageURL: '',
    title: '',
    description: '',
    techStack: [],
    sourceCodeURL: '',
    demoURL: '',
    youtubeURL: '',
    projectType: 'conceptual',
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
    <div className="max-w-xl p-6 mx-auto bg-white rounded-lg shadow">
      <h2 className="mb-4 text-2xl font-semibold">Create a New Portfolio Project</h2>
      {submissionSuccess ? (
        <p className="mb-4 text-green-500">Project created successfully!</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="sequenceID" className="block mb-1 font-medium">
            Sequence ID
          </label>
          <input
            type="number"
            id="sequenceID"
            name="sequenceID"
            className="w-full p-2 border rounded"
            value={formData.sequenceID}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageURL" className="block mb-1 font-medium">
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            className="w-full p-2 border rounded"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="techStack" className="block mb-1 font-medium">
            Tech Stack (comma-separated)
          </label>
          <input
            type="text"
            id="techStack"
            name="techStack"
            className="w-full p-2 border rounded"
            value={formData.techStack.join(', ')} // Convert array to comma-separated string
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="sourceCodeURL" className="block mb-1 font-medium">
            Source Code URL
          </label>
          <input
            type="text"
            id="sourceCodeURL"
            name="sourceCodeURL"
            className="w-full p-2 border rounded"
            value={formData.sourceCodeURL}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="demoURL" className="block mb-1 font-medium">
            Demo URL
          </label>
          <input
            type="text"
            id="demoURL"
            name="demoURL"
            className="w-full p-2 border rounded"
            value={formData.demoURL}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="youtubeURL" className="block mb-1 font-medium">
            YouTube URL
          </label>
          <input
            type="text"
            id="youtubeURL"
            name="youtubeURL"
            className="w-full p-2 border rounded"
            value={formData.youtubeURL}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="projectType" className="block mb-1 font-medium">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full p-2 border rounded"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="conceptual">Conceptual</option>
            <option value="capstone">Capstone</option>
            <option value="study">Study</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};
