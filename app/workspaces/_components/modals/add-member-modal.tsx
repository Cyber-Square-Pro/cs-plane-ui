// components/AddMemberModal.js
"use client"
import { useState } from 'react';
import CustomDropdown from '@/components/custom-dropdown';
import { AddMembersDropdownItems } from '@/constants/dropdown-items';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
  
const AddMemberModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState(AddMembersDropdownItems[2]);

  if (!isOpen) return null;

  const handleSelect = (selectedItem: string) => {
    setSelectedRole(selectedItem);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 cursor-default">
      {/* Overlay with onClick handler */}
      <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={handleOverlayClick}></div>

      {/* Modal content with shadow, rounded border, and full width */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl z-20">
        <h2 className="text-md font-bold mb-4 text-slate-700">Invite people to collaborate</h2>
        <p className="text-slate-700 text-sm">Invite members to work on your workspace</p>
        <div className="flex items-center mb-4 text-sm mt-2">
          <input
            type="email"
            placeholder="Enter their email"
            className="w-full p-1 border border-gray-300 rounded mb-4 mt-2"
          />
          <span className="border border-gray-300 p-1 mb-2 ml-2 rounded pr-4 text-slate-700">
            <CustomDropdown
              dropDownTitle="Member"
              dropDownItems={AddMembersDropdownItems}
              onSelect={handleSelect}
            />
          </span>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-200 text-gray-800 px-2 py-2 rounded text-sm"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-2 py-2 rounded text-sm"
          >
            Add Invitation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;