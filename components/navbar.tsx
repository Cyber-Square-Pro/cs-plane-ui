import { Logo } from "@/components/logo";
import React from "react";

interface Props{
  email?: string
}

export const Navbar:React.FC<Props> = (props) => {

  const { email } = props

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo height={200} width={200}/> 
        
        <div>{ email }</div>
      </div>
    </div>
  );
};
