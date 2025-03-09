import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ButtonShowcase() {
  const [copied, setCopied] = useState(false);
  const jsxCode = `<button className="px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-all">Click Me</button>`;
  const htmlCode = `<button class="px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-all">Click Me</button>`;

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-black min-h-screen text-white mt-10">
      {/* JSX Button */}
      <div>
        <h3 className="text-lg font-semibold">JSX (React) Button</h3>
        <button className="px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-all">
          Click Me
        </button>
        <div className="relative bg-gray-900 text-white p-4 mt-2 rounded-md">
          <code className="text-sm block overflow-auto">{jsxCode}</code>
          <button
            onClick={() => copyToClipboard(jsxCode)}
            className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-md"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      {/* HTML Button */}
      <div>
        <h3 className="text-lg font-semibold">HTML Button</h3>
        <button className="px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-all">
          Click Me
        </button>
        <div className="relative bg-gray-900 text-white p-4 mt-2 rounded-md">
          <code className="text-sm block overflow-auto">{htmlCode}</code>
          <button
            onClick={() => copyToClipboard(htmlCode)}
            className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-md"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
