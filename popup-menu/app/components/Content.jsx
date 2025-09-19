"use client";

import React, { useState } from "react";
import { PopupMenu } from "@codeshumon/popup-menu";

const Content = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [isOpen, setIsOpen] = useState(false);
  const [lastAction, setLastAction] = useState("None");

  const demoItems = [
    { label: "Option 1", action: () => setSelectedOption("Option 1") },
    { label: "Option 2", action: () => setSelectedOption("Option 2") },
    { label: "Option 3", action: () => setSelectedOption("Option 3") },
  ];

  const handleOpenChange = (open) => {
    setIsOpen(open);
    setLastAction(open ? "Menu opened" : "Menu closed");
  };

  const handleClose = () => {
    setLastAction("Close callback triggered");
  };

  return (
    <div className="bg-gray-50 w-full ">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Popup Menu Demo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Basic Usage
            </h3>

            <div className="my-12">
              <PopupMenu
                trigger={
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Show Popup Menu
                  </button>
                }
                onOpenChange={handleOpenChange}
                onClose={handleClose}
                position='right-top'
                viewportPadding={20}
                noDefaultStyle
                enableScroll
                animation='out'
                menuClassName='bg-[#f0b22c] p-2 rounded-lg border-2 border-red-500'
                header={
                  <div className="font-semibold">Menu Header</div>
                }
                footer={
                  <div className="text-sm  text-gray-500">
                    Menu Footer
                  </div>
                }
              >
                {demoItems.map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer rounded-md transition-colors"
                    onClick={item.action}
                  >
                    {item.label}
                  </div>
                ))}
              </PopupMenu>
            </div>
          </div>

          <div className="mb-4 mt-20 p-3 bg-gray-100 rounded-lg">
            <p className="text-sm font-medium">
              Selected Option:{" "}
              <span className="font-bold text-blue-600">{selectedOption}</span>
            </p>
            <p className="text-sm font-medium">
              Menu State:{" "}
              <span className="font-bold">{isOpen ? "Open" : "Closed"}</span>
            </p>
            <p className="text-sm font-medium">
              Last Action: <span className="font-bold">{lastAction}</span>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Prop Demonstrations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">onOpenChange</h4>
              <p className="text-sm text-blue-700">
                Called when menu opens or closes. Current state:{" "}
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">onClose</h4>
              <p className="text-sm text-green-700">
                Called specifically when menu closes. Last action:{" "}
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">enableScroll</h4>

            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">
                noDefaultStyle
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Installation & Usage
          </h3>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <code className="block mb-2">
              npm install @codeshumon/popup-menu
            </code>
            <code className="block">
              {`import { PopupMenu } from '@codeshumon/popup-menu';`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
