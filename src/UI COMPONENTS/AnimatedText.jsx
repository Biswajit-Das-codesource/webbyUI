import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AnimatedTextShowcase() {
  const [activeTab, setActiveTab] = useState("jsx");
  const [copied, setCopied] = useState(false);

  const text = "Welcome to GSAP";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const jsxCode = `import { motion } from "framer-motion";

export default function AnimatedText() {
  const text = "Welcome to GSAP";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white px-4">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold flex flex-wrap justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}`;

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GSAP Text Animation</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <style>
        body {
            background-color: #121212;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            overflow: hidden;
            padding: 20px;
        }
        .animated-text span {
            font-size: 2rem;
            font-weight: bold;
            opacity: 0;
            display: inline-block;
            transform: translateY(50px);
        }
    </style>
</head>
<body>

    <h1 class="animated-text">Welcome to GSAP</h1>

    <script>
        const text = document.querySelector(".animated-text");
       text.innerHTML = text.textContent.split("").map(letter => 
        gsap.to(".animated-text span", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out"
        });
    </script>

</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeTab === "jsx" ? jsxCode : htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-6 p-4 bg-black min-h-screen text-white mt-10 w-full max-w-4xl mx-auto">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex justify-center">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold flex flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div className="flex space-x-4 border-b border-gray-700 overflow-auto">
        <button
          className={`${activeTab === "jsx" ? "text-white border-b-2 border-white" : "text-gray-400"} px-4 py-2`}
          onClick={() => setActiveTab("jsx")}
        >
          JSX
        </button>
        <button
          className={`${activeTab === "html" ? "text-white border-b-2 border-white" : "text-gray-400"} px-4 py-2`}
          onClick={() => setActiveTab("html")}
        >
          HTML
        </button>
      </div>

      <div className="relative bg-gray-900 text-white p-2 mt-2 rounded-md overflow-auto">
        <SyntaxHighlighter language={activeTab === "jsx" ? "jsx" : "html"} style={dracula} className="text-sm block">
          {activeTab === "jsx" ? jsxCode : htmlCode}
        </SyntaxHighlighter>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-md"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
}
