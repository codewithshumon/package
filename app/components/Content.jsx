'use client'

import React, { useState } from 'react';

const Content = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const demoItems = [
    { label: 'Option 1', action: () => setSelectedOption('Option 1') },
    { label: 'Option 2', action: () => setSelectedOption('Option 2') },
    { label: 'Option 3', action: () => setSelectedOption('Option 3') },
    { label: 'Option 4', action: () => setSelectedOption('Option 4') },
  ];

  const positionOptions = [
    { label: 'Top', value: 'top' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' },
    { label: 'Top-Left', value: 'top-left' },
    { label: 'Top-Right', value: 'top-right' },
    { label: 'Bottom-Left', value: 'bottom-left' },
    { label: 'Bottom-Right', value: 'bottom-right' },
  ];

  const [selectedPosition, setSelectedPosition] = useState('bottom-right');

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Popup Menu Demo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Basic Usage
              </h3>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setShowPopup(!showPopup)}
              >
                Show Popup Menu
              </button>
              
              {/* <PopupMenu
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
                items={demoItems}
                position={selectedPosition}
              /> */}
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Configuration
              </h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Selected Option: {selectedOption}
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Position
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                >
                  {positionOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Installation & Usage
            </h3>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <code className="block mb-2">npm install your-popup-menu-package</code>
              <code className="block">
                {`import PopupMenu from 'your-popup-menu-package';`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;