import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const components = [
    "Accordion",
    "Login",
    "Payment Card",
    "InfiniteScrollText",
    "Avatar",
    "Badge",
    "Breadcrumb",
    "Button",
    "Calendar",
    "Card",
    "Carousel",
    "Chart",
    "Checkbox",
    "Collapsible",
    "Combobox",
    "Command",
    "Context Menu",
    "Data Table",
    "Date Picker",
    "Dialog",
    "Drawer",
    "Dropdown Menu",
    "Form",
    "Hover Card",
    "Input",
    "Input OTP",
    "Label",
    "Menubar",
    "Navigation Menu",
    "Pagination",
    "Popover",
    "Progress",
    "Radio Group",
    "Resizable",
    "Scroll Area",
    "Select",
    "Separator",
    "Sheet",
    "Sidebar",
    "Skeleton",
    "Slider",
    "Sonner",
    "Switch",
    "Table",
    "Tabs",
    "Textarea",
    "Toast",
    "Toggle",
    "Toggle Group",
    "Tooltip",
  ];

  return (
    <div className="bg-black text-white min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black border-r border-gray-800 overflow-y-auto custom-scrollbar transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:translate-x-0 md:w-64`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Components</h2>
          <ul className="space-y-2 text-sm font-medium">
            {components.map((component, index) => (
              <li
                key={index}
                className="hover:bg-gray-800 p-2 rounded-md cursor-pointer"
              >
                <Link
                  to={`/components/${component.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking a link
                >
                  {component}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-800 p-2 rounded-md"
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64  w-full">
        <Outlet />
      </div>

      {/* Hide scrollbar with custom CSS */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
          .custom-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default MainPage;
