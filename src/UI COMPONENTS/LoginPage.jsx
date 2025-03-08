import React from "react";

const CreateProject = () => {
  return (
    <div className="flex justify-center items-center  bg-black">
      <div className="bg-black p-10 rounded-lg shadow-md border md:w-96 border-white">
        {/* Title */}
        <h2 className="text-white text-lg font-semibold">Create project</h2>
        <p className="text-gray-400 text-sm mb-4">
          Deploy your new project in one-click.
        </p>
        {/* Project Name */}
        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Name</label>
          <input
            type="text"
            placeholder="Name of your project"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Framework Selection */}
        <div className="mb-6">
          <label className="text-white text-sm block mb-1">Framework</label>
          <select className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
            <option value="">Select</option>
            <option value="react">React</option>
            <option value="nextjs">Next.js</option>
            <option value="vue">Vue.js</option>
            <option value="angular">Angular</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">
            Cancel
          </button>
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
