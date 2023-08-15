import { useState } from "react";
import ProjectsListView from "../../components/ProjectsListView";
import ProjectsGridView from "../../components/ProjectsGridView";
import ProjectsAddNew from "../../components/ProjectsAddNew";

export default function Portfolio() {
  const [activeComponent, setActiveComponent] = useState("portfolioGridView");

  const renderComponent = () => {
    switch (activeComponent) {
      case "portfolioGridView":
        return <ProjectsGridView />;
      case "portfolioProjectsTabular":
        return < ProjectsListView />;
      case "addNew":
        return <ProjectsAddNew />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${activeComponent === "portfolioGridView" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          onClick={() => setActiveComponent("portfolioGridView")}
        >
          Grid View
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === "portfolioProjectsTabular" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          onClick={() => setActiveComponent("portfolioProjectsTabular")}
        >
          List View
        </button>
        <button
          className={`px-4 py-2 rounded ${activeComponent === "addNew" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          onClick={() => setActiveComponent("addNew")}
        >
          Add New
        </button>
      </div>
      <div className="mt-8">{renderComponent()}</div>
    </div>
  );
}