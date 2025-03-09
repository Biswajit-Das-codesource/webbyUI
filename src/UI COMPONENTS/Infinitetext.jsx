import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clipboard, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme
import "prismjs/components/prism-jsx"; // JSX support
import "prismjs/components/prism-css"; // CSS support
import "prismjs/components/prism-markup"; // HTML support

const InfiniteScrollText = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("jsx");

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col p-8">
      {/* Infinite Scroll Text */}
      <div className="w-full overflow-hidden bg-black py-4 flex border border-gray-300 mt-4">
        <motion.div
          className="flex space-x-10 text-5xl font-bold text-green-400 min-w-max drop-shadow-[0_0_10px_#00ff00]"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <span>🚀 Welcome to the Infinite Scroll Demo! No breaks! 🚀✨</span>
          <span>🔥 Smooth endless animation using Framer Motion + Tailwind! 🎉</span>
          <span>💡 Perfect infinite scrolling effect with React! 🌍</span>
          <span>🚀 Welcome to the Infinite Scroll Demo! No breaks! 🚀✨</span>
        </motion.div>
      </div>

      {/* Code Display Section */}
      <div className="max-w-3xl p-6 bg-black mt-10 w-full">
        {/* Tab Buttons */}
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
            {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Code Block */}
        <pre className="rounded-md bg-black p-4 overflow-x-auto text-sm mt-3 w-full">
          <code className={`language-${activeTab}`}>{codeSnippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
};

// Code Snippets for JSX, HTML, and CSS
const codeSnippets = {
  jsx: `import React from "react";
import { motion } from "framer-motion";

const InfiniteScrollText = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-4 flex">
      <motion.div
        className="flex space-x-10 text-5xl font-bold text-green-400 min-w-max drop-shadow-[0_0_10px_#00ff00]"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        <span>🚀 Welcome to the Infinite Scroll Demo! No breaks! 🚀✨</span>
        <span>🔥 Smooth endless animation using Framer Motion + Tailwind! 🎉</span>
        <span>💡 Perfect infinite scrolling effect with React! 🌍</span>
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;`,

  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Infinite Scrolling Glowing Text</title>
    <style>
        body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        .scroll-container {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            display: flex;
        }

        .scrolling-text {
            display: flex;
            font-size: 3rem;  
            font-weight: bold;
            color: cyan;
            text-shadow: 
                0 0 1px cyan,
                0 0 0px cyan,
                0 0 10px rgba(0, 255, 255, 0.8);
            animation: scrollText 15s linear infinite;
        }

        /* Duplicate the text for smooth looping */
        .scrolling-text span {
            padding-right: 50px; /* Space between repeated text */
        }

        @keyframes scrollText {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-50%);
            }
        }
    </style>
</head>
<body>

    <div class="scroll-container">
        <div class="scrolling-text">
            <span>🔥 Welcome to the Infinite Scroll Animation Demo! Glowing Text Effect 🚀✨</span>
            <span>🔥 Welcome to the Infinite Scroll Animation Demo! Glowing Text Effect 🚀✨</span>
        </div>
    </div>

</body>
</html>

`,

};

export default InfiniteScrollText;
