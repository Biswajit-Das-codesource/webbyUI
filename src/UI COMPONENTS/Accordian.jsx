import { useState, useEffect } from "react";
import { ChevronDown, Clipboard, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // VS Code Dark Theme
import "prismjs/components/prism-jsx"; // JSX syntax highlighting
import "prismjs/components/prism-css"; // CSS syntax highlighting
import "prismjs/components/prism-javascript"; // JavaScript syntax highlighting
import "prismjs/components/prism-markup"; // HTML syntax highlighting

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("jsx"); // Default tab

  useEffect(() => {
    Prism.highlightAll(); // Ensure Prism applies syntax highlighting
  }, [activeTab]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black min-h-screen p-6 md:p-10">
      {/* Accordion Section */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-white text-center">
          Responsive Accordion
        </h1>
        <div className="mt-6">
          {accordionItems.map((item, index) => (
            <div key={index} className="border border-gray-700 rounded-lg mb-3">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                }`}
              >
                <p className="text-gray-300">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Installation Notice */}
      <h2 className="text-left text-white font-bold text-lg mt-6 ml-4 md:ml-10">
        If you use JSX, install lucide-react:
      </h2>
      <div className="p-3 bg-gray-900 text-white rounded-lg mt-2 ml-4 md:ml-10 md:w-1/2">
        <code>npm i lucide-react</code>
      </div>

      {/* Syntax Highlighting Section */}
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg mt-10">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {["jsx", "html", "css", "js"].map((tab) => (
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
            {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Code Block */}
        <pre className="rounded-md bg-black p-4 overflow-x-auto text-sm mt-3 w-full">
          <code className={`language-${activeTab}`}>
            {codeSnippets[activeTab]}
          </code>
        </pre>
      </div>
    </div>
  );
};

// Accordion Items Data
const accordionItems = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is Tailwind CSS?",
    content: "Tailwind CSS is a utility-first CSS framework for building custom designs.",
  },
  {
    title: "How does an Accordion work?",
    content: "An accordion is a UI component that allows users to expand and collapse sections.",
  },
];

// Code Snippets for Different Tabs
const codeSnippets = {
  jsx: `
// JSX Accordion Code
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = () => {
  const accordionItems = [
    { title: "What is React?", content: "React is a JS library for UI." },
    { title: "What is Tailwind CSS?", content: "Tailwind CSS is a utility-first CSS framework." },
    { title: "How does an Accordion work?", content: "An accordion allows users to expand/collapse sections." }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {accordionItems.map((item, index) => (
        <div key={index} className="border border-gray-700 rounded-lg mb-3">
          <button className="w-full flex justify-between px-4 py-3 text-lg text-white bg-gray-900 hover:bg-gray-800"
            onClick={() => toggleAccordion(index)}>
            {item.title}
            <ChevronDown className={\`h-5 w-5 transition-transform \${openIndex === index ? "rotate-180" : "rotate-0"}\`} />
          </button>
          <div className={\`overflow-hidden transition-all duration-300 \${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"}\`}>
            <p className="text-gray-300">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Accordion;
`,
  html: `
<!-- HTML Accordion -->
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">What is React?<span class="icon">+</span></button>
    <div class="accordion-content"><p>React is a JS library for UI.</p></div>
  </div>
</div>
`,
  css: `
/* Accordion CSS */
.accordion-header { background: black; color: white; padding: 10px; border: none; }
.accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-in-out; }
.accordion-header:hover { background: #333; }
`,
  js: `
// JS to Handle Accordion
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});
`,
};

export default Accordion;
