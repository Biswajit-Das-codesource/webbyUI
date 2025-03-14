import { useState, useEffect } from "react";
import { Clipboard, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";

const AvatarComponent = () => {
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
    <div className="bg-black min-h-screen flex flex-col items-center p-8">
      {/* Avatar UI */}
      <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-white shadow-md">
        <img
          src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg"
              class="avatar-img img-fluid"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-white"
        />
        <h2 className="text-white mt-3 font-semibold">John Doe</h2>
        <p className="text-gray-400 text-sm">Frontend Developer</p>
      </div>

      {/* Code Display with Copy Feature */}
      <div className="max-w-3xl mx-10 p-6 bg-black mt-10 w-full">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {["jsx", "html"].map((tab) => (
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

          <button
            onClick={() => copyToClipboard(codeSnippets[activeTab])}
            className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
          >
            {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <pre className="rounded-md bg-black p-4 overflow-x-auto text-sm mt-3 w-full">
          <code className={`language-${activeTab}`}>{codeSnippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
};

// Code Snippets for JSX and HTML
const codeSnippets = {
  jsx: `import React from "react";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-white shadow-md">
      <img src="https://via.placeholder.com/100" alt="Avatar" className="w-24 h-24 rounded-full border-2 border-white" />
      <h2 className="text-white mt-3 font-semibold">John Doe</h2>
      <p className="text-gray-400 text-sm">Frontend Developer</p>
    </div>
  );
};

export default Avatar;`,

  html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Responsive Avatar Component</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
   
      .avatar-card {
        background-color: black;
        padding: 20px 25px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid white;
        max-width: 320px; /* Limit width on large screens */
      }

      .avatar-img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid white;
        object-fit: cover;
      }

      .avatar-name {
        margin-top: 10px;
        font-weight: bold;
        color: white;
      }

      .avatar-role {
        color: gray;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6 col-lg-4">
          <div class="avatar-card mx-auto">
            <img
              src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg"
              class="avatar-img img-fluid"
              alt="Avatar"
            />
            <h2 class="avatar-name">John Doe</h2>
            <p class="avatar-role">Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
`
};

export default AvatarComponent;
