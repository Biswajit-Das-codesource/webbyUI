import { useState, useEffect } from "react";
import { Clipboard, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // VS Code Dark Theme
import "prismjs/components/prism-jsx"; // JSX syntax highlighting
import "prismjs/components/prism-css"; // CSS syntax highlighting
import "prismjs/components/prism-javascript"; // JavaScript syntax highlighting
import "prismjs/components/prism-markup"; // HTML syntax highlighting

const CreateProject = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("jsx"); // Default tab

  useEffect(() => {
    Prism.highlightAll(); // Apply Prism syntax highlighting
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center p-8">
      {/* Project Creation UI */}
      <div className="bg-black p-10 rounded-lg shadow-md border md:w-96 border-white">
        <h2 className="text-white text-lg font-semibold">Create Project</h2>
        <p className="text-gray-400 text-sm mb-4">
          Deploy your new project in one-click.
        </p>

        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Name</label>
          <input
            type="text"
            placeholder="Name of your project"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

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

        <div className="flex justify-between">
          <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">
            Cancel
          </button>
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">
            Deploy
          </button>
        </div>
      </div>

      {/* Syntax Highlighting with Tabs */}
      <div className="max-w-3xl mx-10 p-6 bg-black mt-10 w-full">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {["jsx", "html", "css"].map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1 rounded-md transition ${
                  activeTab === tab
                    ? "bg-gray-700 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Copy Button */}
          <button
            onClick={() => copyToClipboard(codeSnippets[activeTab])}
            className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Clipboard className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <pre className="rounded-md bg-black p-4 overflow-x-auto text-sm mt-3 w-full">
          <code className={`language-${activeTab}`}>
            {codeSnippets[activeTab]}
          </code>
        </pre>
      </div>
    </div>
  );
};

// Code Snippets
const codeSnippets = {
  jsx: `import React from "react";

const CreateProject = () => {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen">
      <div className="bg-black p-10 rounded-lg shadow-md border md:w-96 border-white">
        <h2 className="text-white text-lg font-semibold">Create Project</h2>
        <p className="text-gray-400 text-sm mb-4">
          Deploy your new project in one-click.
        </p>
        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Name</label>
          <input type="text" placeholder="Project Name" className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600" />
        </div>
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
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">Cancel</button>
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">Deploy</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;`,

  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Create Project</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .card {
            background-color: black;
            border-radius: 10px;
            padding: 20px;
            width: 350px;
            border: 1px solid white;
        }
        .form-control, .form-select {
            background-color: black;
            border: 1px solid white;
            color: white;
        }
        .form-control::placeholder {
            color: gray;
        }
        .btn-cancel {
            background-color: #2c2c2c;
            color: white;
        }
        .btn-cancel:hover {
            background-color: #3c3c3c;
        }
    </style>
</head>
<body>

<div class="card">
    <h5 class="fw-bold" style="color: white;">Create project</h5>
    <p class="text-secondary">Deploy your new project in one-click.</p>

    <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" placeholder="Name of your project">
    </div>

    <div class="mb-3">
        <label class="form-label">Framework</label>
        <select class="form-select">
            <option selected>Select</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
        </select>
    </div>

    <div class="d-flex justify-content-between">
        <button class="btn btn-cancel px-4">Cancel</button>
        <button class="btn btn-light px-4">Deploy</button>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`,
};

export default CreateProject;
