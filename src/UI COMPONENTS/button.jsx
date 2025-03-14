import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ButtonShowcase() {
  const [copiedCode, setCopiedCode] = useState(null);
  const jsxCode = `<button className="px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-all">Click Me</button>`;
  const htmlCode = `
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
  `;

  const copyToClipboard = (codeType) => {
    navigator.clipboard.writeText(codeType === "jsx" ? jsxCode : htmlCode);
    setCopiedCode(codeType);
    setTimeout(() => setCopiedCode(null), 1500);
  };

  return (
    <div className="flex flex-col gap-4 p-2 bg-black min-h-screen text-white mt-10">
      {/* JSX Button */}
      <div>
        <h3 className="text-lg font-semibold">JSX (React) Button</h3>
        <button className="px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition-all">
          Click Me
        </button>
        <div className="relative bg-gray-900 text-white p-4 mt-2 rounded-md">
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
            className="text-sm block overflow-auto"
          >
            {jsxCode}
          </SyntaxHighlighter>
          <button
            onClick={() => copyToClipboard("jsx")}
            className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-md"
          >
            {copiedCode === "jsx" ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      {/* HTML Buttons (Bootstrap) */}
      <div>
        <h3 className="text-lg font-semibold">HTML Buttons (Bootstrap)</h3>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-primary">
            Primary
          </button>
          <button type="button" className="btn btn-secondary">
            Secondary
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-warning">
            Warning
          </button>
          <button type="button" className="btn btn-info">
            Info
          </button>
          <button type="button" className="btn btn-light">
            Light
          </button>
          <button type="button" className="btn btn-dark">
            Dark
          </button>
          <button type="button" className="btn btn-link">
            Link
          </button>
        </div>
        <div className="relative bg-gray-900 text-white p-4 mt-2 rounded-md">
          <SyntaxHighlighter
            language="html"
            style={dracula}
            className="text-sm block overflow-auto"
          >
            {htmlCode}
          </SyntaxHighlighter>
          <button
            onClick={() => copyToClipboard("html")}
            className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-md"
          >
            {copiedCode === "html" ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
