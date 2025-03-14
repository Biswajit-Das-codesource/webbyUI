import { useState } from "react";
import { Copy, Check, ChevronDown } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DropdownShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("jsx");

  const jsxCode = `
  import { useState } from "react";
  import { ChevronDown } from "lucide-react";

  export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
        >
          Open Menu <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
            <ul className="py-2 text-sm text-white">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Dashboard</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Settings</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">Profile</a></li>
              <li><hr className="border-gray-700 my-1" /></li>
              <li><a href="#" className="block px-4 py-2 text-red-400 hover:bg-gray-800 rounded">Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    );
  }
  `;

  const htmlCode = `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShadCN Style Bootstrap Dropdown</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .dropdown-menu {
            background-color: #18181b; /* Dark gray background */
            border: 1px solid #27272a; /* Subtle border */
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .dropdown-item {
            color: #e4e4e7; /* Light gray text */
            padding: 10px 15px;
            border-radius: 6px;
            transition: background 0.2s ease-in-out;
        }
        .dropdown-item:hover {
            background-color: #27272a; /* Slightly lighter gray */
            color: #fff;
        }
        .btn-dark-custom {
            background-color: #18181b;
            color: #e4e4e7;
            border: 1px solid #27272a;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 14px;
            transition: background 0.2s ease-in-out;
        }
        .btn-dark-custom:hover {
            background-color: #27272a;
        }
    </style>
</head>
<body class="bg-dark text-white p-5 d-flex justify-content-center align-items-center" style="height: 100vh;">

    <div class="dropdown">
        <button class="btn btn-dark-custom dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Open Menu
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Dashboard</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
        </ul>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

  `;

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-6 p-2 bg-black min-h-screen text-white mt-10">
      {/* Dropdown Preview */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex justify-center">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
          >
            Open Menu <ChevronDown size={16} />
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
              <ul className="py-2 text-sm text-white">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-800 rounded"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-800 rounded"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-800 rounded"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="border-gray-700 my-1" />
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-red-400 hover:bg-gray-800 rounded"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-100  bg-gray-800 text-sm">
        Install Lucide React:{" "}<br/><br/>
        <code className=" p-1 rounded">
          npm install lucide-react
        </code>
      </p>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-700">
        <button
          className={`${
            activeTab === "jsx"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          } px-4 py-2`}
          onClick={() => setActiveTab("jsx")}
        >
          JSX
        </button>
        <button
          className={`${
            activeTab === "html"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          } px-4 py-2`}
          onClick={() => setActiveTab("html")}
        >
          HTML
        </button>
      </div>

      {/* Code Display */}
      <div className="relative bg-gray-900 text-white p-2 mt-2 rounded-md">
        <SyntaxHighlighter
          language={activeTab === "jsx" ? "jsx" : "html"}
          style={dracula}
          className="text-sm block overflow-auto"
        >
          {activeTab === "jsx" ? jsxCode : htmlCode}
        </SyntaxHighlighter>
        <button
          onClick={() =>
            copyToClipboard(activeTab === "jsx" ? jsxCode : htmlCode)
          }
          className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-md"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
}
