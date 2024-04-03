// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-48 flex flex-col justify-start items-center py-6">
      <ul className="space-y-4 mt-2">
        <li><a className='hover:bg-gray-700 px-4 py-2 rounded' href='/buttons'>Buttons</a></li>
        <li><a className="hover:bg-gray-700 px-4 py-2 rounded" href='/cards'>Cards</a></li>
        <li className="hover:bg-gray-700 px-4 py-2 rounded">About</li>
        <li className="hover:bg-gray-700 px-4 py-2 rounded">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
