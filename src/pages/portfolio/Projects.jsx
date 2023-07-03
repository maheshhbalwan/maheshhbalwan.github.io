import React from "react";
import projects from "../../db/projects_db.json";
import { ArrowIcon, GitHubIcon, YoutubeIcon } from "../../components/icons";

function Projects() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            My Projects
          </h2>
          <p className="text-justify text-gray-500 sm:text-xl">
            Below mentioned are list of all projects i have made:
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {projects.map((project) => (
            <div
              className="bg-white border rounded-lg shadow border-primary-200"
              key={project.Name}
            >
              <div>
                <img src={project.Image} alt="" className="rounded-lg" />
              </div>
              <div className="p-4">
                <h3 className="mt-4 mb-2 text-xl font-bold">{project.Title}</h3>
                <p className="text-gray-500">Project Description</p>
                <p className="text-gray-500">
                  Tech Stack: {project["Tech Stack"].join(", ")}
                </p>

                <div className="flex gap-4 mt-4">
                  {project["Source Code"] && (
                    <a
                      href={project["Source Code"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                        <GitHubIcon />
                      </div>
                    </a>
                  )}
                  {project["Deployment Link"] && (
                    <a
                      href={project["Deployment Link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                        <ArrowIcon />
                      </div>
                    </a>
                  )}
                  {project["Youtube Link"] && (
                    <a
                      href={project["Youtube Link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                        <YoutubeIcon />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
