import React, { useState } from 'react';
import { Edit, Link, ExternalLink, Trash } from 'lucide-react';
/*
    Author: Ramshija.k.k on June 11th, 2024
    Purpose:To get  the dropdown  with edit,delete,copylinkfor each issue displayed in sprints */

interface DropdownItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SprintEditDropDown: DropdownItem[] = [
  { value: 'edit', label: 'Edit', icon: Edit },
  { value: 'copy-link', label: 'Copy link', icon: Link },
  { value: 'open-new-tab', label: 'Open in new tab', icon: ExternalLink },
  { value: 'delete', label: 'Delete', icon: Trash },
];

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{ fontWeight: 'bold', fontSize: '1.5rem', lineHeight: 0 }}
        >
          ...
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {SprintEditDropDown.map((item) => (
              <button
                key={item.value}
                className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                onClick={() => {
                  setIsOpen(false);
                  console.log(`Clicked on ${item.label}`);
                }}
              >
                <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
