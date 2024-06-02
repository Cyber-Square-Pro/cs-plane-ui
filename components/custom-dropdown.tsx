import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';
// import { ChevronDown } from 'lucide-react';
type Props = {
    dropDownTitle:string,
    dropDownItems:string[],
    onSelect: (selectedItem: string) => void;
}

const CustomDropdown:React.FC<Props> = ({dropDownTitle,dropDownItems, onSelect}) => {
  return (
   <>
   
<DropdownMenu  >
  <DropdownMenuTrigger className="ml-4">{dropDownTitle}</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />
    {dropDownItems.map((item, index) => ( 
        <DropdownMenuItem key={index} onSelect={() => onSelect(item)}>{item}</DropdownMenuItem>
    ) )}
    
  </DropdownMenuContent>
  
</DropdownMenu>


   </>
  )
}

export default CustomDropdown