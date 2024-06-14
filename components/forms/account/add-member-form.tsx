import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomDropdown from "@/components/custom-dropdown";
import { AddMembersDropdownItems } from "@/constants/dropdown-items";
import { IAddMemberFormValues } from "@/types/user";

interface Props {
  onSubmit: (formData: IAddMemberFormValues) => Promise<void>;
  onClose: () => void;
}

const AddMemberForm: React.FC<Props> = ({ onSubmit,onClose }) => {
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const handleSelectRole = (selectedItem: string) => {
    setSelectedRole(selectedItem);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form fields
    if (!email || !selectedRole) {
      console.error('Validation error: Email and role must be provided.');
      return;
    }
    console.log('Email:', email);
    console.log('Selected Role:', selectedRole); // Log selected role here
    // Call onSubmit function passed as prop
    await onSubmit({ email, role: selectedRole });
    // Clear form fields after submission
    setEmail("");
    setSelectedRole("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mb-4 text-sm mt-2">
        <Input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <span className="border border-gray-300 p-2 ml-2 rounded pr-4 text-slate-700">
          <CustomDropdown
            dropDownTitle={selectedRole || "Member"}
            dropDownItems={AddMembersDropdownItems}
            onSelect={handleSelectRole}
            
          />
        </span>
      </div>
      <div className=" flex justify-end">
    <button
        className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm mr-2 p-1"
        onClick={onClose}
    >
        Cancel
    </button>
    <Button type="submit">Add Member</Button>
</div>


    </form>
  );
};

export default AddMemberForm;
