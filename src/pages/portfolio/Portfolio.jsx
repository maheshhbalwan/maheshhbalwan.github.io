import { useState, useEffect } from "react";
import ProjectsGridView from "../../components/ProjectsGridView";
import ProjectsListView from "../../components/ProjectsListView";

export default function Portfolio() {
  const [activeComponent, setActiveComponent] = useState("portfolioGridView");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    // This effect will be triggered whenever the activeComponent changes.
    // You can put any side effect-related logic here if needed.
  }, [activeComponent]);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${activeComponent === "portfolioGridView" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          onClick={() => handleButtonClick("portfolioGridView")}
        >
          Grid View
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === "portfolioProjectsTabular" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          onClick={() => handleButtonClick("portfolioProjectsTabular")}
        >
          List View
        </button>
      </div>
      <div className="mt-8">
        {activeComponent === "portfolioGridView" && <ProjectsGridView />}
        {activeComponent === "portfolioProjectsTabular" && <ProjectsListView />}
      </div>
    </div>
  );
}