import { useState, useEffect } from "react";
import { Clipboard, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme for syntax highlighting
import "prismjs/components/prism-jsx"; // JSX syntax support
import "prismjs/components/prism-markup"; // HTML syntax support

const PaymentForm = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("jsx"); // Default tab

  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting
  }, [activeTab]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center p-8">
      {/* Payment Form UI */}
      <div className="bg-black p-10 rounded-lg shadow-md border md:w-96 border-white">
        <h2 className="text-white text-lg font-semibold">Payment Details</h2>
        <p className="text-gray-400 text-sm mb-4">
          Enter your card details to complete the payment.
        </p>

        <div className="mb-4">
          <label className="text-white text-sm block mb-1">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        <div className="mb-4">
          <label className="text-white text-sm block mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label className="text-white text-sm block mb-1">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div className="w-1/2">
            <label className="text-white text-sm block mb-1">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">
            Cancel
          </button>
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">
            Pay Now
          </button>
        </div>
      </div>

      {/* Syntax Highlighting with Copy Feature */}
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

// Code Snippets for JSX and HTML
const codeSnippets = {
  jsx: `import React from "react";

const PaymentForm = () => {
  return (
   <div className="bg-black min-h-screen flex flex-col items-center p-8">
        {/* Payment Form UI */}
        <div className="bg-black p-10 rounded-lg shadow-md border md:w-96 border-white">
          <h2 className="text-white text-lg font-semibold">Payment Details</h2>
          <p className="text-gray-400 text-sm mb-4">
            Enter your card details to complete the payment.
          </p>

          <div className="mb-4">
            <label className="text-white text-sm block mb-1">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="text-white text-sm block mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <label className="text-white text-sm block mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <div className="w-1/2">
              <label className="text-white text-sm block mb-1">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 bg-black rounded-lg text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button className="px-4 py-2 bg-black rounded-lg text-white hover:bg-zinc-700">
              Cancel
            </button>
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">
              Pay Now
            </button>
          </div>
        </div>
      </div>
  );
};

export default PaymentForm;`,

  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Payment Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color:white
        }
        .card {
            background-color: black;
            border-radius: 10px;
            padding: 20px;
            width: 350px;
            border: 1px solid white;
            color:white
        }
        .form-control {
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
    <h5 class="fw-bold">Payment Details</h5>
    <p class="text-secondary">Enter your card details to complete the payment.</p>

    <!-- Card Number -->
    <div class="mb-3">
        <label class="form-label">Card Number</label>
        <input type="text" class="form-control" placeholder="1234 5678 9012 3456">
    </div>

    <!-- Cardholder Name -->
    <div class="mb-3">
        <label class="form-label">Cardholder Name</label>
        <input type="text" class="form-control" placeholder="John Doe">
    </div>

    <!-- Expiry Date & CVV -->
    <div class="row mb-3">
        <div class="col">
            <label class="form-label">Expiry Date</label>
            <input type="text" class="form-control" placeholder="MM/YY">
        </div>
        <div class="col">
            <label class="form-label">CVV</label>
            <input type="text" class="form-control" placeholder="123">
        </div>
    </div>

    <!-- Buttons -->
    <div class="d-flex justify-content-between">
        <button class="btn btn-cancel px-4">Cancel</button>
        <button class="btn btn-light px-4">Pay Now</button>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`,
};

export default PaymentForm;
