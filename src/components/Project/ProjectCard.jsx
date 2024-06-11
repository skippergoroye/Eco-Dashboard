import React, { useState } from "react";

export default function ProjectCard() {
  const [activeTab, setActiveTab] = useState("project");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleDescriptionChange = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleGoalChange = (event) => {
    setSelectedGoal(event.target.value);
  };

  return (
    <section className="px-4 lg:px-16 py-8 lg:py-12 bg-gray-50">
      <div>
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-center border-b border-[#979797] mt-10">
          <p
            onClick={() => handleTabClick("project")}
            className={`cursor-pointer text-xl  ${activeTab === "project" ? "border-b-2 border-[#1DB559]" : ""}`}
          >
            Projects
          </p>
          <p
            onClick={() => handleTabClick("problems")}
            className={`cursor-pointer text-xl ${activeTab === "problems" ? "border-b-2 border-[#1DB559]" : ""}`}
          >
            Problems
          </p>
        </div>

        {activeTab === "project" && (
          <div className="flex flex-col items-center mt-4">
            <div className="w-full lg:w-[700px] my-4">
              <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">
                Project Title
              </label>
              <input
                type="text"
                id="projectTitle"
                placeholder="Type your project title"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full lg:w-[700px] my-4">
              <label className="block text-sm font-medium text-gray-700">Eco Category:</label>
              <div className="flex flex-col lg:flex-row justify-between gap-4 mt-2">
                {["environment", "community", "organization"].map((category) => (
                  <div key={category} className="flex items-center cursor-pointer border p-1 px-4 border-gray-400">
                    <input
                      type="radio"
                      id={category}
                      name="ecoCategory"
                      value={category}
                      className="hidden"
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={category} className="flex items-center">
                      <input
                        type="radio"
                        id={category}
                        name="ecoCategory"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                        className="appearance-none w-0 h-0 mr-2"
                      />
                      <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                        <div className={`w-4 h-4 rounded-full bg-green-500 ${selectedCategory === category ? 'visible' : 'invisible'}`}></div>
                      </div>
                      <span className="ml-2 text-gray-700 capitalize">{category}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[700px] my-4">
              <label htmlFor="unsdGoals" className="block text-sm font-medium text-gray-700">
                UNSD Goals
              </label>
              <select
                id="unsdGoals"
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedGoal}
                onChange={handleGoalChange}
              >
                <optgroup label="Select UNSD goal">
                  <option value="Goal 1">Goal 1</option>
                  <option value="Goal 2">Goal 2</option>
                  <option value="Goal 3">Goal 3</option>
                  {/* Add more options as needed */}
                </optgroup>
              </select>
            </div>
            <div className="w-full lg:w-[700px] my-4">
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                Project Description
              </label>
              <textarea
              rows="4" cols="250"
                id="projectDescription"
                placeholder="Tell us about your project"
                className="mt-1 block w-full px-3  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={projectDescription}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <div className="w-full lg:w-[700px] my-4">
              <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700">
              Location
              </label>
              <input
                type="text"
                id="projectTitle"
                placeholder="Where is your project hosted?"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
          </div>
        )}

        {activeTab === "problems" && (
          <div className="flex flex-col items-center">
            <h1>Problem here</h1>
          </div>
        )}
      </div>
    </section>
  );
}
